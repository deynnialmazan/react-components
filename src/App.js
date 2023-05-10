import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './style/index.css';


function App() {

  const images = [
    {
      id: 1001,
      description: 'Industry experienced instructors',
      image: 'https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
    },
    {
      id: 1002,
      description: 'Six-weeks of practicum placement',
      image: 'https://images.unsplash.com/photo-1555421689-43cad7100750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 1003,
      description: 'Complete a program in 2 months',
      image: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
      id: 1003,
      description: 'Online courses available all time',
      image: 'https://images.unsplash.com/photo-1588702547981-5f8fed370e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
  ];

  return (
    <>
      <Header 
      name='Dev e-Training'
      />
      <main>
        <Banner 
        title='Launch a Career in Web Development' 
        content='Start today the dream of becoming a Software Developer.
        We offer online courses for many different programming languages.'
        />
        <Gallery 
        title='Why Dev e-Training?'
        content='Dev e-Training offers solid, market-driven programs that focus 
        on helping students develop the skills that are in-demand by leading
        employers'
        images= {images} 
        />
      </main>
      <Footer text='All Rights Reserved. &copy;2023 Dev e-Training'/>
    </>
  );
}

export default App;
