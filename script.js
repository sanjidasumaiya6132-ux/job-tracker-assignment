 let jobs = [
    { id: 1, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130k - $175k", description: "Build cross-platform mobile applications using React Native.", status: "NOT APPLIED" },
    { id: 2, companyName: "WebFlow Agency", position: "Web Designer", location: "Los Angeles", type: "Part-time", salary: "$80k - $120k", description: "Create stunning web experiences for high-profile clients.", status: "NOT APPLIED" },
    { id: 3, companyName: "Tech Solutions", position: "Frontend Developer", location: "Remote", type: "Full-time", salary: "$100k - $140k", description: "Work with modern JavaScript frameworks.", status: "NOT APPLIED" },
    { id: 4, companyName: "Data Corp", position: "Data Analyst", location: "New York", type: "Contract", salary: "$90k - $110k", description: "Analyze complex data sets for business growth.", status: "NOT APPLIED" },
    { id: 5, companyName: "Cloud Systems", position: "DevOps Engineer", location: "Seattle", type: "Full-time", salary: "$150k - $180k", description: "Manage cloud infrastructure and automation.", status: "NOT APPLIED" },
    { id: 6, companyName: "Creative Studio", position: "UI/UX Designer", location: "Remote", type: "Part-time", salary: "$70k - $90k", description: "Design beautiful user interfaces.", status: "NOT APPLIED" },
    { id: 7, companyName: "App Wizards", position: "iOS Developer", location: "Austin", type: "Full-time", salary: "$130k - $160k", description: "Develop native iOS applications using Swift.", status: "NOT APPLIED" },
    { id: 8, companyName: "Fast Code", position: "Backend Developer", location: "Remote", type: "Full-time", salary: "$120k - $155k", description: "Build scalable backend services with Node.js.", status: "NOT APPLIED" }
];

let currentTab = 'ALL';

function render() {
    const container = document.getElementById('jobs-container');
    
    // Update Counts
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'INTERVIEW').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'REJECTED').length;

    const filtered = jobs.filter(j => currentTab === 'ALL' || j.status === currentTab);
    document.getElementById('tab-job-count').innerText = `${filtered.length} jobs`;

    container.innerHTML = '';
    
    // render function-er bhetore replace koro
if (filtered.length === 0) {
    container.innerHTML = `
        <div class="empty-container">
            <img src="assignment_7959593 1.png" alt="No jobs"> 
            <h3>No jobs available</h3>
            <p>Check back soon for new job opportunities</p>
        </div>
    `;
    return;
}

    filtered.forEach(job => {
        const div = document.createElement('div');
        div.className = 'job-card';
        div.innerHTML = `
            <button class="delete-btn" onclick="deleteJob(${job.id})">Delete</button>
            <h3>${job.companyName}</h3>
            <p>${job.position}</p>
            <p style="font-size:13px; color:gray;">${job.location} • ${job.type} • ${job.salary}</p>
            <div class="actions">
                <button class="btn btn-int ${job.status === 'INTERVIEW' ? 'active' : ''}" onclick="updateStatus(${job.id}, 'INTERVIEW')">INTERVIEW</button>
                <button class="btn btn-rej ${job.status === 'REJECTED' ? 'active' : ''}" onclick="updateStatus(${job.id}, 'REJECTED')">REJECTED</button>
            </div>
        `;
        container.appendChild(div);
    });
}

window.updateStatus = (id, status) => {
    jobs = jobs.map(j => j.id === id ? {...j, status: status} : j);
    render();
};

window.deleteJob = (id) => {
    jobs = jobs.filter(j => j.id !== id);
    render();
};

window.changeTab = (tab) => {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.toggle('active', b.innerText.toUpperCase() === tab);
    });
    render();
};

render();