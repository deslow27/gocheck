import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Stats from "./components/Stats";

function App() {
    const [listItems, setListItems] = useState([]);

    function handleAddItem(item) {
        const newListItems = [...listItems, item];
        setListItems(newListItems);
    }

    function handleDeleteItem(id) {
        setListItems(listItems.filter((item) => item.id !== id));
    }

    function handleToggleItem(id) {
        setListItems((listItems) => listItems.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
    }

    function handleClearItems() {
        if (window.confirm("Apakah kamu yakin ingin menghapus semua catatan?")) {
            setListItems([]);
        }
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItem={handleAddItem} />
            <CheckList items={listItems} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
            <Stats items={listItems} />
        </div>
    );
}

export default App;
