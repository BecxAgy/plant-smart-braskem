import { Input, List , Chip} from '@material-tailwind/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import InterventionItemList from './InterventionItemList';
import logoBraskem from '../images/logoBraskem.png';
import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import SelectProject from './SelectProject';

export function DefaultSidebar({ markerData, open, setOpen, setIntervention }) {
  const [search, setSearch] = useState('');
  const { interventions, loading } = useSelector((state) => state.intervention);
  const grayAlerts = interventions.filter(interv => interv.alerta === 'gray').length;
  const redAlerts = interventions.filter(interv => interv.alerta === 'red').length;
  const greenAlerts = interventions.filter(interv => interv.alerta === 'green').length;    
  const yellowAlerts = interventions.filter(interv => interv.alerta === 'yellow').length;
  const [selectedProject, setSelectedProject] = useState(""); // Estado para o projeto selecionado

  const interventionsFiltered = useMemo(() => {
    const lowerSearch = search.toLowerCase();

    return interventions.filter(
      (interv) =>
        interv.tag.toLowerCase().includes(lowerSearch) &&
        (selectedProject === "" || interv.PJ === selectedProject) // Filtro com base no projeto selecionado
    );
  }, [interventions, search, selectedProject]);

  return (
    <div
      className={`p-5 rounded-lg absolute top-0 left-0 w-1/4 ${
        open ? 'hidden md:block' : ''
      }`}
    >
      <div
        className='bg-white rounded-2xl p-10 '
        style={{ height: '95vh', minWidth:'17rem'}}
      >
        <div>
          <img src={logoBraskem} width={180} alt='' />
          <div className='w-32 mb-4 '>
          <div id="countAlertas" className="flex justify-between space-x-4 mb-4">
  
   <Chip value={grayAlerts} variant="ghost" />
  
  
  <Chip value={redAlerts} variant="ghost" color='red' />
  
 
  <Chip value={greenAlerts} variant="ghost"  color='green'/>
  
  
  <Chip value={yellowAlerts} variant="ghost" color='yellow'/>
 
</div>

            <SelectProject
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
             
            />
          </div>
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
            }}
            className=' bg-blue-gray-900 rounded-xl '
            type='search'
            color='blue'
            label='Tag Name'
            icon={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
          />
        </div>

        <List
          className='scrollbar-thin  scrollbar-thumb-black scrollbar-track-transparent overflow-y-auto my-5'
          style={{ maxHeight: '60vh' }}
        >
          {markerData &&
            interventionsFiltered.map((marker) => (
              <InterventionItemList
                key={marker.id}
                intervention={marker}
                onClick={() => {
                  console.log('entrou');
                  setOpen(!open);
                  setIntervention(marker);
                }}
              />
            ))}
        </List>
      </div>
    </div>
  );
}
