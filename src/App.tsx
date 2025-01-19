import React from 'react';
import {Construction} from 'lucide-react';

const styles = {
    container: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f8f9fa'
    },
    card: {
        maxWidth: '500px',
        width: '100%',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textAlign: 'center'
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: '#333'
    }
};

const App = () => {
    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <Construction size={48} color="#f59e0b"/>
                <h1 style={styles.title}>Launching Soon</h1>
            </div>
        </div>
    );
};

export default App;