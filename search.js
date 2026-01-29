import { supabase } from "./supabase.js";

// Grab your input fields and results container
const searchNameInput = document.getElementById("searchName");
const searchIdInput = document.getElementById("searchId");
const resultsDiv = document.getElementById("results");

// Add event listener to the search form
document.getElementById("searchForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent page reload

  await searchRecords();
});

async function searchRecords() {
  // Get input values
  const name = searchNameInput.value.trim();
  const id = searchIdInput.value.trim();

  // Start query
  let query = supabase.from("admissions").select("*");

  // Apply filters
  if (name) query = query.ilike("full_name", `%${name}%`);
  if (id) query = query.eq("admission_no", id);

  // Run query
  const { data, error } = await query;

  // Handle error
  if (error) {
    resultsDiv.innerHTML = `<p style="color:red;">Error fetching records: ${error.message}</p>`;
    return;
  }

  // Clear previous results
  resultsDiv.innerHTML = "";

  if (!data || data.length === 0) {
    resultsDiv.innerHTML = "<p>No matching records found.</p>";
    return;
  }

  // Display results
  data.forEach(r => {
    resultsDiv.innerHTML += `
      <div class="card">
        <b>${r.full_name}</b><br>
        Admission No: ${r.admission_no}<br>
        Status: ${r.status}
      </div>`;
  });
}

// Optional: expose globally if needed
window.searchRecords = searchRecords;
