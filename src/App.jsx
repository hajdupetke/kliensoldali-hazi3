import Card from './components/Card';
import { CardContainer } from './components/CardContainer';
import ColorSelector from './components/ColorSelector';
import Modal from './components/Modal';
import sorozatok from './scripts/sorozatok';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('amber');
  const [hidden, setHidden] = useState(true);
  const [modalContent, setContent] = useState({});

  return (
    <div className={`bg-${color}-100 p-4 w-screen h-screen `}>
      <ColorSelector color={color} changeColor={(color) => setColor(color)} />
      <h1 className={`text-4xl font-bold text-center mb-4 text-${color}-800`}>
        Sorozatok
      </h1>
      <CardContainer>
        {/* Kártyák kezdete */}
        {sorozatok.map((elem, index) => (
          <Card
            color={color}
            key={index}
            content={elem}
            onClick={() => {
              setHidden(false);
              setContent(elem);
            }}
          />
        ))}
      </CardContainer>

      <Modal
        content={modalContent}
        hidden={hidden}
        onClick={() => {
          setHidden(true);
        }}
        color={color}
      />
    </div>
  );
}

export default App;
