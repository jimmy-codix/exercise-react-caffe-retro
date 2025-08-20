import type { ICaffeData } from '../types/interfaces';
import { Header } from './Header';
import { Page } from './Page';
import { caffeData} from '../data/caffeData';

function App() {
  return (
    <>
      <Header />
      {caffeData.map((item: ICaffeData) => (
        <Page 
          key={item.id}
          id={item.id}
          headerText={item.headerText}
          redBoxTopText={item.redBoxTopText}
          redBoxBottomText={item.redBoxBottomText}
        >
          {item.content}
        </Page>
      ))}
    </>
  )
}

export default App
