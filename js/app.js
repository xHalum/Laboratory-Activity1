document.addEventListener('DOMContentLoaded', () => {

    const profileCard = document.getElementById('profileCard');
    const profileName = document.getElementById('profileName');
    const profileProgram = document.getElementById('profileProgram');
    const profileYear = document.getElementById('profileYear');
    const profileStatus = document.getElementById('profileStatus');
    const detailsPanel = document.getElementById('detailsPanel');


    const profileForm = document.getElementById('profileForm');
    const nameInput = document.getElementById('nameInput');
    const programInput = document.getElementById('programInput');
    const yearInput = document.getElementById('yearInput');
    const statusInput = document.getElementById('statusInput');
    const formMessage = document.getElementById('formMessage');


    const updateBtn = document.getElementById('updateBtn');
    const toggleDetailsBtn = document.getElementById('toggleDetailsBtn');
    const themeBtn = document.getElementById('themeBtn');
    const resetBtn = document.getElementById('resetBtn');

    const defaultData = {
        name: profileName.textContent,
        program: profileProgram.textContent,
        year: yearInput.querySelector('option[selected]').value, // Get defaults from HTML attributes
        status: profileCard.getAttribute('data-status')
    };


    updateBtn.addEventListener('click', () => {
        const enteredName = nameInput.value.trim();

        if (nameInput.value && enteredName === "") {
            formMessage.textContent = "Name cannot be just empty spaces.";
            formMessage.style.color = "red";
            return;
        }

        if (enteredName !== "") {
            profileName.textContent = enteredName;
        }
        
        profileProgram.textContent = programInput.value;
        profileYear.textContent = yearInput.value;
        
        const statusValue = statusInput.value;
        profileStatus.textContent = statusValue.charAt(0).toUpperCase() + statusValue.slice(1);
        
        profileCard.setAttribute('data-status', statusValue);

        formMessage.textContent = " Profile updated successfully!";
        formMessage.style.color = "green";
        
        setTimeout(() => { formMessage.textContent = ""; 
    }, 3000);
    });

    toggleDetailsBtn.addEventListener('click', () => {
        if (detailsPanel.style.display === 'none') {
            detailsPanel.style.display = 'block';
        } else {
            detailsPanel.style.display = 'none';
        }
    });

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    resetBtn.addEventListener('click', () => {
        profileForm.reset();

        profileName.textContent = defaultData.name;
        profileProgram.textContent = defaultData.program;
        profileYear.textContent = defaultData.year;
        profileStatus.textContent = defaultData.status.charAt(0).toUpperCase() + defaultData.status.slice(1);
        profileCard.setAttribute('data-status', defaultData.status);

        detailsPanel.style.display = 'block';

        formMessage.textContent = "Profile restored to default baseline values.";
        formMessage.style.color = "blue";
        setTimeout(() => { formMessage.textContent = ""; }, 3000);
    });
});
