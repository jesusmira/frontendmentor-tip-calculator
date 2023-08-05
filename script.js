const btnpercent = [5,10,15,20,25,'Custom'];

const boxBtn = document.querySelector('.box-btn');
const reset = document.getElementById('reset');
reset.addEventListener('click', () => { cleanFields()});

for (let i = 0; i < btnpercent.length; i++) {
    if (btnpercent[i] === 'Custom') {
        const inp = document.createElement('input');
        inp.type = 'number';
        inp.min = 1;
        inp.max = 100;
        inp.classList.add('inCustom');
        inp.placeholder = btnpercent[i];
        inp.style.margin = 0;
        inp.id = 'custom';
        inp.value = '';
        inp.addEventListener('keyup', () => { operation( btnpercent[i])});
        boxBtn.appendChild(inp);
    }else{
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.textContent = btnpercent[i] + '%';
        btn.addEventListener('click', () => { operation (btnpercent[i])});
        boxBtn.appendChild(btn);
    }
}

const operation = (npercent) => {
    
    if( !!document.getElementById('spanError')) {
        document.getElementById('spanError').remove();
        document.getElementById('people').classList.remove('errorl');
    }

    const inputs= document.querySelectorAll('input[type="number"]');
    const bill = inputs[0].value;
    const custom = inputs[1].value;
    const people = inputs[2].value;
    console.log({bill, custom, people});
    let total = 0;
    if (bill === '') return;
    if ( people === '') {
        const error = document.createElement('span');
        error.className = 'spanError';
        error.id = 'spanError'; 
        error.textContent = 'Can´t be zero';
        document.getElementById('nPeople').appendChild(error);
        document.getElementById('people').classList.add('errorl');
        return;
    }
    if ( custom === ''){
        total = (bill * npercent / 100).toFixed(2);
    }else{
       // custom = +custom;
        total = (bill * +custom / 100).toFixed(2);
    }
    const totalP = (total / people).toFixed(2);

    document.getElementById('tip').textContent = totalP;
    document.getElementById('total').textContent = total;
    

};

const cleanFields = () => {
    document.getElementById('bill').value = '';
    document.getElementById('custom').value = '';
    document.getElementById('people').value = '';
    document.getElementById('tip').textContent = '0.00';
    document.getElementById('total').textContent = '0.00';
}
