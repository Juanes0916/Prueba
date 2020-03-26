import React from 'react'; // eslint-disable-line
import { UDCollapse } from 'unc-react-creator';

const handleClick = (panels) => {
  const win = window.open('', '');
  win.document.write(`
    <style>
      html,body {
        font-size: 12px;
        font-family: arial, tahoma, sans-serif;
      }

      h2 { color: #777; }
      div { color: #333; font-size: 16px; }
    </style>`);

  const textareas = document.getElementsByTagName('textarea');

  for (let i = 0; i < panels.length; i += 1) {
    win.document.write(`<h2>${panels[i].title}</h2>`);
    win.document.write(`<div>${textareas[i].value}</div>`);
  }

  win.document.close();
  win.focus();
  setTimeout(() => {
    win.print();
    win.close();
  }, 500);
};

const FormActivity = (props) => (
  <div className='text-center'>
    <UDCollapse summaryClassName='unc-summary modulo00' panels={props.panels}/>

    <button
      className='unc-button button-form'
      type='button'
      onClick={() => handleClick(props.panels)}
    >
      <span className='btn-label'><i className='icon-speech'></i></span>
      Descarga tus respuestas
    </button>

    <small style={{
      display: 'block',
      color: '#773939',
      maxWidth: 600,
      margin: '0 auto'
    }}>
      Ten presente que las respuestas no son almacenadas por el sistema.
      Por lo tanto deberás llenar las áreas de texto y a continuación
      hacer clic en <i>Descargar tus respuestas</i>.
    </small>
  </div>
);

export default FormActivity;
