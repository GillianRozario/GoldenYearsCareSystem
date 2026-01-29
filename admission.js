import { supabase } from "./supabase.js";

document.getElementById("admissionForm").addEventListener("submit", async (e) => {
  e.preventDefault();

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
    alert("Error submitting admission");
  } else {
    alert("Admission submitted successfully");
    location.href = "index.html";
  }
});
