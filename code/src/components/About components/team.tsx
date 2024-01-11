import Card from './card';

const founder = 'eliasuran';
const developer = 'eliasuran';
const graphicDesign = 'eliasuran';

const Team = () => {
  return (
    <div className='h-3/5 flex justify-evenly items-center flex-wrap gap-y-6 gap-x-4 lg:mt-0 mt-2'>
      <Card
        link={`https://github.com/${founder}`}
        name={founder}
        title='Founder'
        photo={`https://avatars.githubusercontent.com/${founder}`}
      />
      <Card
        link={`https://github.com/${developer}`}
        name={developer}
        title='Developer'
        photo={`https://avatars.githubusercontent.com/${developer}`}
      />
      <Card
        link={`https://github.com/${graphicDesign}`}
        name={graphicDesign}
        title='Graphic Design'
        photo={`https://avatars.githubusercontent.com/${graphicDesign}`}
      />
    </div>
  );
};

export default Team;
