 document.addEventListener('DOMContentLoaded', () => {
    const totalCountEl = document.querySelector('header h2.text-slate-800');
    const interviewCountEl = document.querySelector('header h2.text-green-600');
    const rejectedCountEl = document.querySelector('header h2.text-red-500');
    const availableJobsCountEl = document.querySelector('main span.bg-blue-100');
    
    const noJobsContainer = document.getElementById('no-jobs-container');
    const jobsList = document.getElementById('jobs-list');

    const filterButtons = {
        all: document.getElementById('all-filter-btn'),
        interview: document.getElementById('Interview-filter-btn'),
        rejected: document.getElementById('Rejected-filter-btn')
    };

    function updateStats() {
        const allCards = document.querySelectorAll('#jobs-list > div');
        let interviewCount = 0;
        let rejectedCount = 0;

        allCards.forEach(card => {
            const status = card.querySelector('.mb-5 span').textContent.trim().toLowerCase();
            if (status === 'interview') interviewCount++;
            if (status === 'rejected') rejectedCount++;
        });

        totalCountEl.textContent = allCards.length;
        availableJobsCountEl.textContent = allCards.length;
        interviewCountEl.textContent = interviewCount;
        rejectedCountEl.textContent = rejectedCount;
    }

    jobsList.addEventListener('click', (e) => {
        const target = e.target;
        const card = target.closest('#jobs-list > div');
        if (!card) return;

        const label = card.querySelector('.mb-5 span');
        const action = target.textContent.trim().toLowerCase();

        if (action === 'interview') {
            label.textContent = 'Interview';
            label.className = "bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest";
            updateStats();
        } 
        else if (action === 'rejected') {
            label.textContent = 'Rejected';
            label.className = "bg-red-100 text-red-700 text-xs font-bold px-3 py-1.5 rounded uppercase tracking-widest";
            updateStats();
        } 
        else if (action === 'delete') {
            card.remove();
            updateStats();
            checkEmptyState(); 
        }
    });

    function filterJobs(type) {
        const allCards = document.querySelectorAll('#jobs-list > div');
        let visibleCount = 0;

    
        Object.values(filterButtons).forEach(btn => {
            btn.className = "text-slate-600 px-6 py-2 rounded-lg font-medium hover:bg-white transition-all";
        });
        filterButtons[type].className = "bg-black text-white px-6 py-2 rounded-lg font-medium transition-all";

        allCards.forEach(card => {
            const status = card.querySelector('.mb-5 span').textContent.trim().toLowerCase();
            if (type === 'all' || status === type) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (visibleCount === 0) {
            noJobsContainer.classList.remove('hidden');
        } else {
            noJobsContainer.classList.add('hidden');
        }
    }

    filterButtons.all.addEventListener('click', () => filterJobs('all'));
    filterButtons.interview.addEventListener('click', () => filterJobs('interview'));
    filterButtons.rejected.addEventListener('click', () => filterJobs('rejected'));

    function checkEmptyState() {
        const allCards = document.querySelectorAll('#jobs-list > div');
        if (allCards.length === 0) {
            noJobsContainer.classList.remove('hidden');
        }
    }
    updateStats();
});