"use client";

import React, { useEffect, useState } from "react";
import { CreatePageDialog } from "@/components/admin/CreatePageDialog";
import { Button } from "@/components/ui/button";
import { Plus, Edit, Copy, ExternalLink, Calendar, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";

interface Page {
  _id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  updatedAt: string;
}

export default function PagesList() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchPages = async () => {
    try {
      const res = await fetch("/api/pages");
      const data = await res.json();
      if (data.success) {
        setPages(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch pages", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleDuplicate = async (id: string) => {
    try {
      const res = await fetch(`/api/pages/${id}/duplicate`, { method: "POST" });
      const data = await res.json();
      if (data.success) {
        toast.success("Page duplicated");
        fetchPages();
      } else {
        toast.error("Failed to duplicate");
      }
    } catch (error) {
      toast.error("Error duplicating page");
    }
  };

  const filteredPages = pages.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.slug.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Pages</h1>
          <p className="text-slate-500">
            Manage your website pages and layouts.
          </p>
        </div>
        <CreatePageDialog onPageCreated={fetchPages}>
          <Button className="gap-2">
            <Plus size={18} /> Create New Page
          </Button>
        </CreatePageDialog>
      </div>

      <div className="relative mb-6">
        <Search
          className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <Input
          className="max-w-sm pl-10"
          placeholder="Search pages..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-6 py-4 font-semibold text-slate-700">Title</th>
              <th className="px-6 py-4 font-semibold text-slate-700">Slug</th>
              <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
              <th className="px-6 py-4 font-semibold text-slate-700">
                Last Modified
              </th>
              <th className="px-6 py-4 text-right font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-8 text-center text-slate-500"
                >
                  Loading pages...
                </td>
              </tr>
            ) : filteredPages.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-8 text-center text-slate-500"
                >
                  No pages found. Create one to get started.
                </td>
              </tr>
            ) : (
              filteredPages.map((page) => (
                <tr key={page._id} className="group hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">
                    {page.title}
                  </td>
                  <td className="px-6 py-4 text-slate-500">/{page.slug}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        page.status === "published"
                          ? "bg-green-100 text-green-700"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {page.status === "published" ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="flex items-center gap-1 px-6 py-4 text-slate-500">
                    <Calendar size={14} />
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                      {page.status === "published" && (
                        <Link
                          href={`/public/${page.slug}`}
                          target="_blank"
                          className="rounded p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600"
                          title="View Live"
                        >
                          <ExternalLink size={16} />
                        </Link>
                      )}
                      <Link
                        href={`/builder/${page._id}`}
                        className="rounded p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600"
                        title="Edit in Builder"
                      >
                        <Edit size={16} />
                      </Link>
                      <button
                        onClick={() => handleDuplicate(page._id)}
                        className="rounded p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-600"
                        title="Duplicate"
                      >
                        <Copy size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
