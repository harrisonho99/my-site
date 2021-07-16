import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import compose from 'lodash/fp/compose';
import Loader from '../../components/post-man/components/Loader';
import { PreferTheme } from '../../context/prefer-theme/PreferTheme';

/* eslint-disable */
interface Props {}

function Container({}: Props) {
  const DARK = 'vs-dark';
  const LIGHT = 'vs-light';
  const [theme, setTheme] = useState(DARK);
  useEffect(() => {
    (window as any).compose = compose;
    console.clear();
  }, []);

  const [code, setCode] = useState(`
/* Composition in Javascript */

var Animal = function (name) {
  this.name = name;
};
var Alligator = function (name) {
  Animal.apply(this, [name]);
};

// extend the prototype
Alligator.prototype = Object.create(Animal.prototype);
Alligator.prototype.constructor = Alligator;
Object.defineProperty(Alligator.prototype, 'constructor', { enumerable: false });

var jack = new Alligator('jack');
console.log(jack);

class Animal2 {
  constructor(name) {
    this.name = name;
  }
}
//es6 class is just syntatic sugar of funtion constructor
class Alligator2 extends Animal2 {
  constructor(name) {
    super(name);
  }
}

const jack2 = new Alligator2('jack');
console.log(jack2);

// composition
const alligator3 = (name) => {
  const self = { name };

  return self;
};
const jack3 = alligator3('jack');

const Foo = (supperClass) =>
  class extends supperClass {
    eat(food = '') {
      console.log(\`Eating \${food}\`);
    }
    poop() {
      console.log('Going to 💩');
    }
  };

class Dog extends Foo(Animal) {
  constructor(...args) {
    super(...args);
  }
  bark() {
    console.log('gau  gau');
  }
  haveLunch(food) {
    this.eat(food);
    this.poop();
  }
}
const jack4 = new Dog(jack);
jack4.haveLunch('cat 🙀');

// combine mix composition

const MixA = (superClass) =>
  class extends superClass {
    //logic
    inheritanceFromMixA() {
      console.log('MixA');
    }
  };
const MixB = (superClass) =>
  class extends superClass {
    //logic
    inheritanceFromMixB() {
      console.log('MixB');
    }
  };
const MixC = (superClass) =>
  class extends superClass {
    //logic
    inheritanceFromMixC() {
      console.log('MixC');
    }
  };
const MixD = (superClass) =>
  class extends superClass {
    //logic
    inheritanceFromMixD() {
      console.log('MixD');
    }
  };
class Base {
  //More logic
  inheritanceFromBase() {
    console.log('Base');
  }
}
class Child extends MixB(MixA(MixC(MixD(Base)))) {}

const child = new Child();
console.log(child);
child.inheritanceFromMixA();
child.inheritanceFromMixB();
child.inheritanceFromMixC();
child.inheritanceFromMixD();
console.log('---------------');
// using functional feature compose
const Child2 = compose(MixA, MixB, MixC, MixD)(Base);
const child2 = new Child2();
console.log(child2);
child2.inheritanceFromMixA();
child2.inheritanceFromMixB();
child2.inheritanceFromMixC();
child2.inheritanceFromMixD();

  `);

  function onExcuteBtnClick() {
    window.console.clear();
    window.eval(code);
  }

  function handleEditorChange(value: any, event: any) {
    setCode(value);
  }
  function onToggleThemeClick() {
    if (theme === DARK) {
      setTheme(() => LIGHT);
    } else {
      setTheme(() => DARK);
    }
  }
  return (
    <div className='relative mt-12'>
      <button
        className='z-50 absolute bottom-24 right-10 shadow-2xl ml-2 inline-block px-3 py-1 text-xs font-normal leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none'
        onClick={onExcuteBtnClick}
      >
        Run on console
      </button>
      {/* <button
        className='z-50 absolute bottom-36 right-10 shadow-2xl ml-2 inline-block px-5 py-1 text-xs font-normal leading-6 text-center text-white uppercase transition bg-blue-700 rounded-full ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none'
        onClick={onToggleThemeClick}
      >
        Toogle Theme
      </button> */}
      <Editor
        height='100vh'
        defaultLanguage='javascript'
        value={code}
        onChange={handleEditorChange}
        theme={theme}
        loading={<Loader />}
      />
    </div>
  );
}

export default Container;
