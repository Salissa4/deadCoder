import './Menu.css'
import { Button } from '@mui/material';

const Menu = ({ onClick }) => (
    <div className="Menu">
        <Button className="Button" onClick={onClick} sx={{ width: 200, fontFamily: 'MenloRegular', fontSize:15, color: 'white', border: 0.5, borderColor: '#929292', borderRadius: 0 }}>PLAY</Button>
    </div>
)

export default Menu;