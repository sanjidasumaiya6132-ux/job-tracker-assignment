<script>
  // 1. Initial Data (Sample Jobs)
  let jobs = [
    {
      id: Date.now(),
      company: "Mobile First Corp",
      role: "React Native Developer",
      type: "Full-time",
      location: "Remote",
      salary: "$130,000 - $175,000",
      status: "all", // "all", "interview", "rejected"
      description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide."
    }
  ];

  // 2. Selectors
  const jobsContainer = document.getElementById('jobs-container');
  const totalCount = document.querySelector('.border-navy p.text-5xl');
  const interviewCount = document.querySelector('.border-teal p.text-5xl');
  const rejectedCount = document.querySelector('.border-coral p.text-5xl');
  const filterButtons = document.querySelectorAll('.flex.gap-3.mb-8 button');

  // 3. Render Function (UI Update)
  function renderJobs(filter = 'all') {
    jobsContainer.innerHTML = '';
    
    const filtered = jobs.filter(job => filter === 'all' || job.status === filter);

    filtered.forEach(job => {
      const card = `
        <div class="relative bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-all animate-fade-up">
          <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 p-2 text-coral bg-coral/10 rounded-full hover:bg-coral hover:text-white transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>

          <h3 class="font-syne font-bold text-navy text-xl">${job.company}</h3>
          <p class="text-slate-500 font-medium mb-3">${job.role}</p>
          
          <div class="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4">
            <span>${job.location}</span> • <span>${job.type}</span> • <span class="text-slate-600">${job.salary}</span>
          </div>

          <div class="mb-4">
            <span class="bg-slate-100 text-slate-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter border border-slate-200">
              ${job.status === 'all' ? 'Not Applied' : job.status}
            </span>
          </div>

          <p class="text-sm text-slate-500 mb-6 leading-relaxed">${job.description}</p>

          <div class="flex gap-3">
            <button onclick="updateStatus(${job.id}, 'interview')" class="px-5 py-2 border-2 border-teal text-teal text-xs font-bold rounded-lg hover:bg-teal hover:text-white transition-all cursor-pointer">Interview</button>
            <button onclick="updateStatus(${job.id}, 'rejected')" class="px-5 py-2 border-2 border-coral text-coral text-xs font-bold rounded-lg hover:bg-coral hover:text-white transition-all cursor-pointer">Rejected</button>
          </div>
        </div>
      `;
      jobsContainer.insertAdjacentHTML('beforeend', card);
    });

    updateCounters();
  }

  // 4. Update Counters (Stats)
  function updateCounters() {
    totalCount.innerText = jobs.length;
    interviewCount.innerText = jobs.filter(j => j.status === 'interview').length;
    rejectedCount.innerText = jobs.filter(j => j.status === 'rejected').length;
    document.querySelector('.text-slate-400.font-semibold').innerText = `${jobs.length} jobs`;
  }

  // 5. Functions for Buttons
  window.updateStatus = (id, newStatus) => {
    const index = jobs.findIndex(j => j.id === id);
    if (index !== -1) {
      jobs[index].status = newStatus;
      renderJobs();
    }
  };

  window.deleteJob = (id) => {
    jobs = jobs.filter(j => j.id !== id);
    renderJobs();
  };

  // 6. Tab Filtering Logic
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Styling reset/active
      filterButtons.forEach(b => b.classList.replace('bg-navy', 'bg-white'));
      filterButtons.forEach(b => b.classList.replace('text-white', 'text-slate-500'));
      
      btn.classList.add('bg-navy', 'text-white');
      
      const filterValue = btn.innerText.toLowerCase();
      renderJobs(filterValue);
    });
  });

  // Initial Render
  renderJobs();
</script>