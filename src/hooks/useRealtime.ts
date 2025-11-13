"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { RealtimeChannel } from "@supabase/supabase-js";

export function useRealtimeOrders(userId?: string) {
  const [orders, setOrders] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => {
    let channel: RealtimeChannel;

    const fetchOrders = async () => {
      const query = supabase.from("orders").select("*").order("created_at", { ascending: false });
      if (userId) query.eq("created_by", userId);
      const { data } = await query;
      setOrders(data || []);
    };

    fetchOrders();

    channel = supabase
      .channel("orders")
      .on("postgres_changes", { event: "*", schema: "public", table: "orders" }, () => {
        fetchOrders();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);

  return orders;
}

export function useRealtimeTracking(orderId: number) {
  const [updates, setUpdates] = useState<any[]>([]);
  const supabase = createClient();

  useEffect(() => {
    let channel: RealtimeChannel;

    const fetchUpdates = async () => {
      const { data } = await supabase
        .from("order_updates")
        .select("*")
        .eq("order_id", orderId)
        .order("time", { ascending: false });
      setUpdates(data || []);
    };

    fetchUpdates();

    channel = supabase
      .channel(`order_updates:${orderId}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "order_updates", filter: `order_id=eq.${orderId}` },
        () => {
          fetchUpdates();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [orderId]);

  return updates;
}