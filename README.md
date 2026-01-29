Golden Years Care System 

Project Overview
The Golden Years Care System is a web based management system designed to digitize and simplify the admission process in old age homes.  
The system replaces manual paperwork with a centralized digital solution, improving accuracy, efficiency, and record management.

Objective
- To design and implement a digital Admission Entry and Management Page
- To support rolebased access for Staff, Trustee, and Owner
- To securely store and retrieve elderly resident admission records

User Roles
Staff
  - Submit new admission entries
  - View admission status
Trustee
  - Submit admission entries
  - Track admission requests
Owner (Admin)
  - Approve or reject admissions
  - View and manage resident records
  - Monitor admission activities


Features Implemented
- Admission entry form with:
    - Personal details
    - Date of joining
    - Medical history / conditions
    - Emergency contact details
- Role-based access control
- Admission submission and status tracking
- Search functionality to retrieve resident records
- Clean and user-friendly interface

Technologies Used
- Frontend: HTML, CSS, JavaScript
- Backend: Supabase
- Database: PostgreSQL
- Browser Support: Chrome, Firefox, Edge

Project Structure
admission-module/

  -index.html
  
  -dashboard.html
  
  -admission.html
  
  -search.html
  
  -owner.html
  
  -styles.css
  
  -app.js
  
  -admission.js
  
  -search.js
  
  -owner.js
  
  -supabase.js
  
  -README.md
