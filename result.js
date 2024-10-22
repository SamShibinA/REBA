document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    localStorage.setItem('neck', document.getElementById('neck').value);
    localStorage.setItem('trunk', document.getElementById('trunk').value);
    localStorage.setItem('leg', document.getElementById('leg').value);
    localStorage.setItem('load', document.getElementById('load').value);
    localStorage.setItem('upper-arm', document.getElementById('upper-arm').value);
    localStorage.setItem('lower-arm', document.getElementById('lower-arm').value);
    localStorage.setItem('wrist', document.getElementById('wrist').value);
    localStorage.setItem('coupling', document.getElementById('coupling').value);
    localStorage.setItem('activity', document.getElementById('activity').value);

    window.location.href = 'result.html';
});

window.onload = function() {

    const neck = parseInt(localStorage.getItem('neck'), 10);
    const trunk = parseInt(localStorage.getItem('trunk'), 10);
    const legs = parseInt(localStorage.getItem('leg'), 10);
    const load_score = parseInt(localStorage.getItem('load'), 10);
    const up_arm = parseInt(localStorage.getItem('upper-arm'), 10);
    const low_arm = parseInt(localStorage.getItem('lower-arm'), 10);
    const wrist = parseInt(localStorage.getItem('wrist'), 10);
    const coupling_score = parseInt(localStorage.getItem('coupling'), 10);
    const activity_score = parseInt(localStorage.getItem('activity'), 10);

    function scoring(n) {
        if (n === 1) {
            return "Negligible Risk.";
        } else if (n >= 2 && n <= 3) {
            return "Low Risk. Change may be needed.";
        } else if (n >= 4 && n <= 7) {
            return "Medium Risk. Further Investigate. Change Soon.";
        } else if (n >= 8 && n <= 10) {
            return "High Risk. Investigate and Implement Change.";
        } else if (n >= 11) {
            return "Very High Risk. Implement Change.";
        }
    }
    
    const table_a = [
        [[1, 2, 3, 4], [2, 3, 4, 5], [2, 4, 5, 6], [3, 5, 6, 7], [4, 6, 7, 8]],
        [[1, 2, 3, 4], [3, 4, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8], [6, 7, 8, 9]],
        [[3, 3, 5, 6], [4, 5, 6, 7], [5, 6, 7, 8], [6, 7, 8, 9], [7, 8, 9, 9]]
    ];
    
    const table_b = [
        [[1, 1, 3, 4, 6, 7], [2, 2, 4, 5, 7, 8], [2, 3, 5, 5, 8, 8]],
        [[1, 2, 4, 5, 7, 8], [2, 3, 5, 6, 8, 9], [3, 4, 5, 7, 8, 9]]
    ];
    
    const table_c = [
        [1, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12], [1, 2, 3, 4, 4, 6, 7, 8, 9, 10, 11, 12],
        [1, 2, 3, 4, 4, 6, 7, 8, 9, 10, 11, 12], [2, 3, 3, 4, 5, 7, 8, 9, 10, 11, 11, 12],
        [3, 4, 4, 5, 6, 8, 9, 10, 10, 11, 12, 12], [3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 12],
        [4, 5, 6, 7, 8, 9, 9, 10, 11, 11, 12, 12], [5, 6, 7, 8, 8, 9, 10, 10, 11, 12, 12, 12],
        [6, 6, 7, 8, 9, 10, 10, 10, 11, 12, 12, 12], [7, 7, 8, 9, 9, 10, 11, 11, 12, 12, 12, 12],
        [7, 7, 8, 9, 9, 10, 11, 11, 12, 12, 12, 12], [7, 8, 8, 9, 9, 10, 11, 11, 12, 12, 12, 12]
    ];
    
    if (
        neck >= 1 && neck <= 3 && trunk >= 1 && trunk <= 5 &&
        legs >= 1 && legs <= 4 && load_score >= 0 && load_score <= 2 &&
        up_arm >= 1 && up_arm <= 6 && low_arm >= 1 && low_arm <= 2 &&
        wrist >= 1 && wrist <= 3 && coupling_score >= 0 && coupling_score <= 3 &&
        activity_score >= 0 && activity_score <= 3
    ) {
        // Calculate scores using your table_a, table_b, and table_c logic
        let score_a = table_a[neck - 1][trunk - 1][legs - 1] + load_score;
        document.getElementById('scorea').textContent = score_a;

        let score_b = table_b[low_arm - 1][wrist - 1][up_arm - 1] + coupling_score;
        document.getElementById('scoreb').textContent = score_b;

        let score_c = table_c[score_b - 1][score_a - 1];
        document.getElementById('scorec').textContent = score_c;

        let reba = score_c + activity_score;
        document.getElementById('rebascore').textContent = reba;

        document.getElementById('result').textContent = scoring(reba);
    }
};













