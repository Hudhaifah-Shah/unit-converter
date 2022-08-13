const inputEl = document.getElementById('input-el')
    const p1 = document.getElementById('p1')
    const p2 = document.getElementById('p2')
    const p3 = document.getElementById('p3')
    
    function convert() {
        let baseValue = inputEl.value 
        let m2f = 3.28084 * baseValue
        m2f = m2f.toFixed(3)
        let f2m = 0.3048 * baseValue
        f2m = f2m.toFixed(3)
        let l2gal = 0.264172 * baseValue
        l2gal = l2gal.toFixed(3)
        let gal2l = 3.78541 * baseValue
        gal2l = gal2l.toFixed(3)
        let kg2lb = 2.20462 * baseValue
        kg2lb = kg2lb.toFixed(3)
        let lb2kg = 0.453592 * baseValue
        lb2kg = lb2kg.toFixed(3)

        p1.innerHTML = `<p id="p1">${baseValue} m = ${m2f} ft <span style="color: black;">|</span> ${baseValue} ft = ${f2m} m</p>`
        p2.innerHTML = `<p id="p2">${baseValue} l = ${l2gal} gal <span style="color: black;">|</span> ${baseValue} gal = ${gal2l} l</p>`
        p3.innerHTML = `<p id="p3">${baseValue} kg = ${kg2lb} lb <span style="color: black;">|</span> ${baseValue} lb = ${lb2kg} kg</p>`
    }