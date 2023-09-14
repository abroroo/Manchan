import { useState, useEffect } from 'react';

function ScrollingTable(): JSX.Element {
  const [topOffset, setTopOffset] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTopOffset((prevOffset) => prevOffset - (document.querySelector('#scrollup table tr:last-child') as HTMLElement).clientHeight);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (topOffset <= -352) {
      setTopOffset(0);
      const scrollupTable = document.querySelector('#scrollup table') as HTMLElement;
      scrollupTable.appendChild(scrollupTable.querySelector('tr:first-child') as Node);
    }
  }, [topOffset]);

  return (
    <div id="scrollup" style={{ height: '150px', width: '40vw', overflow: 'hidden', position: 'relative' }}>
      <table cellPadding="5" style={{ position: 'absolute', top: `${topOffset}px` }}>
        <tbody>
          <tr>
            <td>item 1</td>
          </tr>
          <tr>
            <td>item 2</td>
          </tr>
          <tr>
            <td>item 3</td>
          </tr>
          <tr>
            <td>item 4</td>
          </tr>
          <tr>
            <td>item 5</td>
          </tr>
          <tr>
            <td>item 6</td>
          </tr>
          <tr>
            <td>item 7</td>
          </tr>
          <tr>
            <td>item 8</td>
          </tr>
          <tr>
            <td>item 9</td>
          </tr>
          <tr>
            <td>item 10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScrollingTable;
