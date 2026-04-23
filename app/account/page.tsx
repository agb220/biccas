"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

interface UserData {
  email: string;
  subscription: {
    planTitle: string;
    startDate: string;
    endDate: string | null;
    monthlyPrice: number;
  };
}

export default function AccountPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [profileData, setProfileData] = useState<UserData | null>(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/sign-up");
    }

    const fetchUserData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfileData(docSnap.data() as UserData);
        }
        setFetching(false);
      }
    };

    fetchUserData();
  }, [user, loading, router]);

  if (loading || fetching || !user) {
    return (
      <main className="h-[90vh] flex items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-[#54BD95] border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Lifetime";
    return new Date(dateString).toLocaleDateString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen pt-32 pb-10 text-[#061A1F] container">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome, {user.displayName || "User"}!
          </h1>
          <p className="text-lg md:text-xl opacity-70">
            This is your private account dashboard.
          </p>
        </div>
        <div className="rounded-2xl border border-[#061A1F]/10 bg-white overflow-hidden shadow-sm">
          {/* for descktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#061A1F]/5 bg-[#061A1F]/2">
                  <th className="p-5 font-bold uppercase text-xs tracking-wider opacity-50">
                    Email
                  </th>
                  <th className="p-5 font-bold uppercase text-xs tracking-wider opacity-50">
                    Actual Plan
                  </th>
                  <th className="p-5 font-bold uppercase text-xs tracking-wider opacity-50">
                    Payment Date
                  </th>
                  <th className="p-5 font-bold uppercase text-xs tracking-wider opacity-50">
                    Valid Until
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#061A1F]/5">
                <tr className="hover:bg-[#54BD95]/5 transition-colors duration-300">
                  <td className="p-5 font-medium">{profileData?.email}</td>
                  <td className="p-5">
                    <span className="px-3 py-1 rounded-full bg-[#54BD95]/10 text-[#54BD95] text-sm font-bold border border-[#54BD95]/20">
                      {profileData?.subscription.planTitle}
                    </span>
                  </td>
                  <td className="p-5 opacity-80">
                    {formatDate(profileData?.subscription.startDate || null)}
                  </td>
                  <td className="p-5 opacity-80">
                    {formatDate(profileData?.subscription.endDate || null)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* for mobile */}
          <div className="md:hidden flex flex-col divide-y divide-[#061A1F]/5">
            <div className="p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase opacity-40">
                  Actual Plan
                </span>
                <span className="px-3 py-1 rounded-full bg-[#54BD95]/10 text-[#54BD95] text-xs font-bold border border-[#54BD95]/20">
                  {profileData?.subscription.planTitle}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-bold uppercase opacity-40">
                  Email
                </span>
                <span className="text-sm font-medium">
                  {profileData?.email}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-bold uppercase opacity-40">
                  Payment Date
                </span>
                <span className="text-sm">
                  {formatDate(profileData?.subscription.startDate || null)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-bold uppercase opacity-40">
                  Valid Until
                </span>
                <span className="text-sm">
                  {formatDate(profileData?.subscription.endDate || null)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#54BD95] text-white shadow-lg shadow-[#54BD95]/20">
            <p className="text-xs font-bold uppercase opacity-80">Status</p>
            <p className="text-2xl font-bold mt-1">Active</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[#061A1F]/10">
            <p className="text-xs font-bold uppercase opacity-40">
              Total Spent
            </p>
            <p className="text-2xl font-bold mt-1">
              ${profileData?.subscription.monthlyPrice || 0}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
