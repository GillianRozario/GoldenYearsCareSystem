import { supabase } from "./supabase.js";

/* =========================
   ADMISSION FORM HANDLING
   ========================= */

const admissionForm = document.getElementById("admissionForm");

if (admissionForm) {
  admissionForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // STOP page reload

    const role = localStorage.getItem("role");
    const admissionNo = "ADM-" + Date.now();

    const { error } = await supabase.from("admissions").insert([{
      admission_no: admissionNo,
      admission_date: new Date().toISOString().split("T")[0],
      admission_time: new Date().toLocaleTimeString(),

      full_name: full_name.value,
      age: age.value,
      sex: sex.value,
      father_or_spouse: father.value,

      identification_marks: identification.value,
      address: address.value,
      education: education.value,
      last_employed: employment.value,

      conscious_state: conscious.value,
      mental_condition: mental.value,
      physical_condition: physical.value,
      blood_pressure: bp.value,
      pulse: pulse.value,
      sugar_level: sugar.value,
      vision: vision.value,
      speech: speech.value,
      medical_history: medical.value,
      surgical_history: surgical.value,

      injuries: injuries.value,
      fracture: fracture.value,
      handicap: handicap.value,

      witness_name: witness.value,
      witness_phone: witness_phone.value,

      submitted_role: role,
      status: "PENDING"
    }]);

    if (error) {
        alert(error.message);
    } else {
        alert("Admission submitted successfully");
        window.location.href = "dashboard.html";
    }

  });
}

/* =========================
   SEARCH RECORDS HANDLING
   ========================= */

const searchBtn = document.getElementById("searchBtn");

if (searchBtn) {
  searchBtn.addEventListener("click", async () => {
    const name = searchName.value.trim();
    const id = searchId.value.trim();
    const results = document.getElementById("results");

    let query = supabase.from("admissions").select("*");

    if (name) query = query.ilike("full_name", `%${name}%`);
    if (id) query = query.eq("admission_no", id);

    const { data, error } = await query;

    results.innerHTML = "";

    if (error) {
      results.innerHTML = "<p style='color:red'>Error fetching records</p>";
      return;
    }

    if (!data || data.length === 0) {
      results.innerHTML = "<p>No records found</p>";
      return;
    }

    data.forEach(r => {
      results.innerHTML += `
        <div class="card">
          <b>${r.full_name}</b><br>
          Admission No: ${r.admission_no}<br>
          Status: ${r.status}
        </div>
      `;
    });
  });
}
