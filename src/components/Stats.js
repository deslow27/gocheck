function Stats({ items }) {
    if (items.length === 0) {
        return (
            <footer className="stats">
                <span>📝 Kamu belum punya catatan nih, ayo buat catatan pertamamu! 📝</span>
            </footer>
        );
    }

    const totalItems = items.length;
    const doneItems = items.filter((item) => item.done).length;
    const percentage = Math.round((doneItems / totalItems) * 100);
    return (
        <footer className="stats">
            <span>{percentage === 100 ? "🎉 Selamat! Kamu sudah menyelesaikan semua catatanmu! 🎉" : `📝 Kamu punya ${totalItems} catatan dan baru ${doneItems} yang dichecklist (${percentage}%) ✅`}</span>
        </footer>
    );
}

export default Stats;
