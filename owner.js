import { supabase } from "./supabase.js";

async function load() {
  const { data } = await supabase
    .from("admissions")
    .select("*")
    .eq("status", "PENDING");

  list.innerHTML = "";

  data.forEach(r => {
    list.innerHTML += `
      <div class="card">
        <b>${r.full_name}</b><br>
        ${r.admission_no}<br>
        <button onclick="approve('${r.id}')">Approve</button>
        <button onclick="reject('${r.id}')">Reject</button>
      </div>`;
  });
}

async function approve(id) {
  await supabase.from("admissions").update({ status: "APPROVED" }).eq("id", id);
  load();
}

async function reject(id) {
  await supabase.from("admissions").update({ status: "REJECTED" }).eq("id", id);
  load();
}

window.approve = approve;
window.reject = reject;

load();
