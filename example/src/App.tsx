// Import packages
import React from 'react';

// Import components
import {
  DMPBlurb,
  DMPContent,
  DMPExample,
  DMPFooter,
  DMPHeader,
  DMPInstall,
  DMPWrap,
  DMPLogo,
  DMPTable,
  DMPGHLink,
} from 'jawdev-react-demo-components';

// Import package.json
import pkg from './../package.json';

const App = () => {
  const table: string = `
  | Prop Name         | Description                                                              | Type   | default |
  | ----------------- | ------------------------------------------------------------------------ | ------ | ------- |
  | content           | You can use a string for the modal content instead of an React component | string | ''      |
  | modalbuttonStyles | Overwrite the default button styles                                      | object | {}      |
  | options           | The modal options                                                        | object | {}      |
  `;

  const code = `
  import React from 'react';
  import {
    DMPContent,
    DMPExample,
    DMPFooter,
    DMPHeader,
    DMPInstall,
    DMPWrap,
    DMPLogo,
    DMPTable,
    DMPGHLink,
  } from 'jawdev-react-demo-components';

  const App = () => {
    return (
      <DMPWrap>
        <DMPHeader>
          <DMPLogo logo={pkg.name}/>
          <DMPGHLink link='https://google.com'/>
        </DMPHeader>
        <DMPContent>
          <DMPInstall name={pkg.name}/>
          <DMPTable table={table} name={title}/>
        </DMPContent>
        <DMPFooter/>
      </DMPWrap>
    )
  }
    `;

  const title: string = 'Props';

  return (
    <DMPWrap>
      <DMPHeader>
        <DMPLogo logo={pkg.name}/>
        <DMPGHLink link='https://google.com'/>
      </DMPHeader>
      <DMPContent>
        <DMPBlurb>
          <p>An example of the demo page components.</p>
        </DMPBlurb>
        <DMPInstall name={pkg.name}/>
        <DMPExample code={code}/>
        <DMPTable table={table} name={title}/>
      </DMPContent>
      <DMPFooter/>
    </DMPWrap>
  )
}

export default App
