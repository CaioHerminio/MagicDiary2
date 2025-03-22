document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');

    downloadBtn.addEventListener('click', function() {
        const date = document.getElementById('date').value;
        const tarotCard = document.getElementById('tarotCard').value;
        const cardPosition = document.getElementById('cardPosition').value;
        const tarotInterpretation = document.getElementById('tarotInterpretation').value;
        const spellName = document.getElementById('spellName').value;
        const spellDescription = document.getElementById('spellDescription').value;
        const reflection = document.getElementById('reflection').value;

        let diaryText = `--- Magical Diary Entry ---\n`;
        diaryText += `Date: ${date}\n`;

        if (tarotCard) {
            diaryText += `\nTarot Card of the Day: ${tarotCard}`;
            if (cardPosition) {
                diaryText += ` (${cardPosition})`;
            }
            diaryText += `\nInterpretation: ${tarotInterpretation}\n`;
        }

        if (spellName) {
            diaryText += `\nSpell Name: ${spellName}\n`;
            diaryText += `Description: ${spellDescription}\n`;
        }

        diaryText += `\nReflection:\n${reflection}\n`;
        diaryText += `---------------------------\n`;

        const filename = `magical_diary_${date.replace(/-/g, '')}.txt`;
        const blob = new Blob([diaryText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Set the default date to today
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    document.getElementById('date').value = `${year}-${month}-${day}`;
});
