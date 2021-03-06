# mobx-model (experiment)
A simple wrapper around [mobx](https://github.com/mobxjs/mobx). 

## Status
It's an experiment. We are going to use it in our project and
we are prepared to tweak it until it fits to our use cases.

I cannot recommend anyone to use it in real project because 
it is in an early stage. 

If you like it or have ideas how to improve it I will be happy 
to hear them.

## Instalation

```
npm install --save mobx-app-model
```

to use typescript you need also install following typings:
```
typings install --save --ambient es6-shim
typings install --save --ambient whatwg-fetch
```

## Goals
- actions which are simple to test
- targets which are created from these action and can be 
  used directly in react components without binding
- have composable models
- posible side effects _(this needs to be improved)_

## Description
- state - initial state of your model, this creates the _state_ property on the model (mobx observable)
- actions - methods where model and arguments are passed, they run in mobx transaction
- inputs - method that enables to create additional inputs that can be connected throug drivers rx subject, ... (see examples - gif-fetcher)
- init - enables to init model during creation, good for composing other models

## Example

```javascript
    import { modelFactory } from 'mobx-factory';
    import { autorun } from 'mobx';

    export const createModel = modelFactory({ 
        
        state: {
            value: 0
        },
        
        actions: {
            
            reset({state}) {            
                state.value = 0;
            },
            
            increment({state}) {
                state.value += 1;
            },
            
            decrement({state}) {
                state.value -= 1;
            },
            
            set({state}, value) {
                value = parseInt(value, 10);
                state.value = isNaN(value) ? null : value;
            }        
        }
    });

    const model = createModel();

    autorun(() => {
        console.log(model.state.value);
    });
    
    model.targets.increment(); // 1
    model.targets.increment(); // 2    


```

## Comments
Some of the ideas cames from the [previous experiment](https://github.com/pvasek/vux) 
