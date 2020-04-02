let dom = {
    menu: document.querySelector('div#menu'),
    inicial: document.querySelector('div#inicial'),
    alarme: {
        nome: 'Alarme',
        div: document.querySelector('div#alarme'),
        tintro: document.querySelector('p#Atintro'),
        principal: document.querySelector('p#Aprincipal'),
        secundario: document.querySelector('p#Asecundario'),
        icones: document.querySelector('div#Aicones'),
        musica: document.querySelector('select#Amusica'),
        hora: "",
        minuto: "",
        selectDasMusicas() {
            let i = 0
            for (key in sons) {
                if (i>0&&i<=sons.quantidade) { 
                        let valor = key
                    valor = valor.replace("_", " ")
                    valor = valor.replace("_", " ")
                    valor = valor.replace("_", " ")
                    this.musica.innerHTML += `<option value="${key}" id="${key}">${valor}</option>` 
                }
                i++
            }
        }
    },
    relogio: {
        nome: 'Relogio',
        div: document.querySelector('div#relogio'),
        tintro: document.querySelector('p#Rtintro'),
        principal: document.querySelector('p#Rprincipal'),
        secundario: document.querySelector('p#Rsecundario'),
        icones: document.querySelector('div#Ricones')
    },
    cronometro: {
        nome: 'Cronometro',
        div: document.querySelector('div#cronometro'),
        tintro: document.querySelector('p#Ctintro'),
        principal: document.querySelector('div#Cprincipal'),
        secundario: document.querySelector('p#Csecundario'),
        icones: document.querySelector('div#Cicones')
    },
    timer: {
        nome: 'Timer',
        div: document.querySelector('div#timer'),
        tintro: document.querySelector('p#Ttintro'),
        principal: document.querySelector('p#Tprincipal'),
        secundario: document.querySelector('p#Tsecundario'),
        icones: document.querySelector('div#Ticones'),
        musica: document.querySelector('select#Tmusica'),
        hora: "",
        minuto: "",
        segundo: "",
        selectDasMusicas() {
            let i = 0
            for (key in sons) {
                if (i>0&&i<=sons.quantidade) { 
                        let valor = key
                    valor = valor.replace("_", " ")
                    valor = valor.replace("_", " ")
                    valor = valor.replace("_", " ")
                    this.musica.innerHTML += `<option value="${key}" id="${key}">${valor}</option>` 
                }
                i++
            }
        }
    },
    modal: {
        div: document.getElementById("myModal"),
        span: document.getElementsByClassName("close")[0],
        texto: document.querySelector('p#modal')
    },
    adicionarIcone() {
        //Argumentos: (Tipo, nome, nome, nome, nome, nome...)
        for (let i=1;i<arguments.length;i++) {
            let icone = document.createElement('img')
            icone.setAttribute('src', `./assets/img/icon/${arguments[i]=='rePlay'?'play':arguments[i]}.svg`)
            icone.setAttribute('onclick', `${arguments[i]+arguments[0]}()`)
            icone.setAttribute('class', `icone`)
            if (arguments[0]=='Alarme') this.alarme.icones.appendChild(icone)
            if (arguments[0]=='Relogio') this.relogio.icones.appendChild(icone)
            if (arguments[0]=='Cronometro') this.cronometro.icones.appendChild(icone)
            if (arguments[0]=='Timer') this.timer.icones.appendChild(icone)
        }
    },
    trocarTela(nome) {
        this.inicial.style.display = 'none'
        if(nome!=this.alarme.nome) this.alarme.div.style.display = 'none'
        if(nome!=this.relogio.nome) this.relogio.div.style.display = 'none'
        if(nome!=this.cronometro.nome) this.cronometro.div.style.display = 'none'
        if(nome!=this.timer.nome) this.timer.div.style.display = 'none'
        if(nome==this.alarme.nome) this.alarme.div.style.display = 'block'
        if(nome==this.relogio.nome) this.relogio.div.style.display = 'block'
        if(nome==this.cronometro.nome) this.cronometro.div.style.display = 'block'
        if(nome==this.timer.nome) this.timer.div.style.display = 'block'
    },
    limparEsconderOuMostrarTela(tipo, acao, nome) {
        //Argumentos: Tipo: nome da funcao / Acão: 0-Limpar 1-Esconder 2-Mostrar / Nome: array com todos os obejetos dom a serem limpos/escondidos
        if (tipo==dom.alarme.nome) {
            for (let i in nome) {
                if (nome[i]=='tintro') acao==0?this.alarme.tintro.innerHTML = '':acao==1?this.alarme.tintro.style.display = 'none':this.alarme.tintro.style.display = 'block'
                if (nome[i]=='secundario') acao==0?this.alarme.secundario.innerHTML = '':acao==1?this.alarme.secundario.style.display = 'none':this.alarme.secundario.style.display = 'block'
                if (nome[i]=='icones') acao==0?this.alarme.icones.innerHTML = '':acao==1?this.alarme.icones.style.display = 'none':this.alarme.icones.style.display = 'block'
                if (nome[i]=='titulo') acao==0?this.alarme.titulo.innerHTML = '':acao==1?this.alarme.titulo.style.display = 'none':this.alarme.titulo.style.display = 'block'
                if (nome[i]=='menu') acao==0?this.alarme.menu.innerHTML = '':acao==1?this.alarme.menu.style.display = 'none':this.alarme.menu.style.display = 'block'
                if (nome[i]=='principal') {
                    if (acao==0) {
                        this.alarme.principal.innerHTML = ''
                        this.alarme.principal.style.color = 'black'
                    } else if (acao==1) {
                        this.alarme.principal.style.display = 'none'
                    } else {
                        this.alarme.principal.style.display = 'block'
                    }
                }
            }
        }
        if (tipo==dom.relogio.nome) {
            for (let i in nome) {
                if (nome[i]=='tintro') acao==0?this.relogio.tintro.innerHTML = '':acao==1?this.relogio.tintro.style.display = 'none':this.relogio.tintro.style.display = 'block'
                if (nome[i]=='secundario') acao==0?this.relogio.secundario.innerHTML = '':acao==1?this.relogio.secundario.style.display = 'none':this.relogio.secundario.style.display = 'block'
                if (nome[i]=='icones') acao==0?this.relogio.icones.innerHTML = '':acao==1?this.relogio.icones.style.display = 'none':this.relogio.icones.style.display = 'block'
                if (nome[i]=='titulo') acao==0?this.relogio.titulo.innerHTML = '':acao==1?this.relogio.titulo.style.display = 'none':this.relogio.titulo.style.display = 'block'
                if (nome[i]=='menu') acao==0?this.relogio.menu.innerHTML = '':acao==1?this.relogio.menu.style.display = 'none':this.relogio.menu.style.display = 'block'
                if (nome[i]=='principal') {
                    if (acao==0) {
                        this.relogio.principal.innerHTML = ''
                        this.relogio.principal.style.color = 'black'
                    } else if (acao==1) {
                        this.relogio.principal.style.display = 'none'
                    } else {
                        this.relogio.principal.style.display = 'block'
                    }
                }
            }
        }
        if (tipo==dom.cronometro.nome) {
            for (let i in nome) {
                if (nome[i]=='tintro') acao==0?this.cronometro.tintro.innerHTML = '':acao==1?this.cronometro.tintro.style.display = 'none':this.cronometro.tintro.style.display = 'block'
                if (nome[i]=='secundario') acao==0?this.cronometro.secundario.innerHTML = '':acao==1?this.cronometro.secundario.style.display = 'none':this.cronometro.secundario.style.display = 'block'
                if (nome[i]=='icones') acao==0?this.cronometro.icones.innerHTML = '':acao==1?this.cronometro.icones.style.display = 'none':this.cronometro.icones.style.display = 'block'
                if (nome[i]=='titulo') acao==0?this.cronometro.titulo.innerHTML = '':acao==1?this.cronometro.titulo.style.display = 'none':this.cronometro.titulo.style.display = 'block'
                if (nome[i]=='menu') acao==0?this.cronometro.menu.innerHTML = '':acao==1?this.cronometro.menu.style.display = 'none':this.cronometro.menu.style.display = 'block'
                if (nome[i]=='principal') {
                    if (acao==0) {
                        this.cronometro.principal.innerHTML = ''
                        this.cronometro.principal.style.color = 'black'
                    } else if (acao==1) {
                        this.cronometro.principal.style.display = 'none'
                    } else {
                        this.cronometro.principal.style.display = 'block'
                    }
                }
            }
        }
        if (tipo==dom.timer.nome) {
            for (let i in nome) {
                if (nome[i]=='tintro') acao==0?this.timer.tintro.innerHTML = '':acao==1?this.timer.tintro.style.display = 'none':this.timer.tintro.style.display = 'block'
                if (nome[i]=='secundario') acao==0?this.timer.secundario.innerHTML = '':acao==1?this.timer.secundario.style.display = 'none':this.timer.secundario.style.display = 'block'
                if (nome[i]=='icones') acao==0?this.timer.icones.innerHTML = '':acao==1?this.timer.icones.style.display = 'none':this.timer.icones.style.display = 'block'
                if (nome[i]=='titulo') acao==0?this.timer.titulo.innerHTML = '':acao==1?this.timer.titulo.style.display = 'none':this.timer.titulo.style.display = 'block'
                if (nome[i]=='menu') acao==0?this.timer.menu.innerHTML = '':acao==1?this.timer.menu.style.display = 'none':this.timer.menu.style.display = 'block'
                if (nome[i]=='principal') {
                    if (acao==0) {
                        this.timer.principal.innerHTML = ''
                        this.timer.principal.style.color = 'black'
                    } else if (acao==1) {
                        this.timer.principal.style.display = 'none'
                    } else {
                        this.timer.principal.style.display = 'block'
                    }
                }
            }
        }
    }
}, data = {
    alarme: new Date,
    relogio: new Date,
    cronometro: {
        principal: new Date,
        volta: new Date,
        ultimaVolta: new Date,
    },
    timer: new Date,
    horaCerta(){
        this.relogio = new Date()
        dom.relogio.tintro.innerHTML = `Atual: ${("0" + this.relogio.getDate()).slice(-2)}/${("0" + (this.relogio.getMonth()+1)).slice(-2)}/${this.relogio.getFullYear()}`
        return `
            <table class="relogio">
                <tr>
                    <td class="dig">${("0" + this.relogio.getHours()).slice(-2)}</td>
                    <td>:</td>
                    <td class="dig">${("0" + this.relogio.getMinutes()).slice(-2)}</td>
                    <td>:</td>
                    <td class="dig">${("0" + this.relogio.getSeconds()).slice(-2)}</td>
                </tr>
            </table>
        `
    },
    botaUmCentesimo(){
        this.cronometro.principal.setMilliseconds(this.cronometro.principal.getMilliseconds()+10)
        if (this.cronometro.principal.getHours()>0) {
            return `
            <table class="relogio">
                <tr> 
                    <td class="dig">${("0" + this.cronometro.principal.getHours()).slice(-2)}</td>
                    <td>:</td>
                    <td class="dig">${("0" + this.cronometro.principal.getMinutes()).slice(-2)}</td>
                    <td>:</td>
                    <td class="dig">${("0" + this.cronometro.principal.getSeconds()).slice(-2)}</td>
                </tr>
            </table>
        `
        } else {
            return `
            <table class="relogio">
                <tr> 
                    <td class="dig">${("0" + this.cronometro.principal.getMinutes()).slice(-2)}</td>
                    <td>:</td>
                    <td class="dig">${("0" + this.cronometro.principal.getSeconds()).slice(-2)}</td>
                    <td>:</td>
                    <td class="dig">${("0" + this.cronometro.principal.getMilliseconds()).slice(-3).substring(0,2)}</td>
                </tr>
            </table>
        `
        }
    }
}, funcao = {
    relogio: '',
    cronometro: '',
    timer: ''
}, valor = {
    alarme: {
        hora: '',
        minuto: ''
    },
    timer: {
        hora: '',
        minuto: '',
        segundo: ''
    }
}, contador = {
    cronometro: {
        volta: ''
    },
    timer: {
        real: '',
        preciso: ''
    },
    sons: {
        tocando: ''
    }
}
const sons = {
    quantidade: 4,
    Bella_Ciao: new Audio('./assets/audio/bellaCiao.mp3'),
    Dance_Monkey: new Audio('./assets/audio/danceMonkey.mp3'),
    Dorime_Ameno: new Audio('./assets/audio/dorimeAmeno.mp3'),
    Old_Town_Road: new Audio('./assets/audio/oldTownRoad.mp3'),
    escolherOSom(nome){
        if (nome=='Bella_Ciao') {
            this.Bella_Ciao.play()
            contador.sons.tocando = 'Bella_Ciao'
        } else if (nome=='Dance_Monkey') {
            this.Dance_Monkey.play()
            contador.sons.tocando = 'Dance_Monkey'
        } else if (nome=='Dorime_Ameno') {
            this.Dorime_Ameno.play()
            contador.sons.tocando = 'Dorime_Ameno'
        } else if (nome=='Old_Town_Road') {
            this.Old_Town_Road.play()
            contador.sons.tocando = 'Old_Town_Road'
        }
    },
    pararOSom(){
        if (contador.sons.tocando=='Bella_Ciao') {
            this.Bella_Ciao.pause()
            this.Bella_Ciao.currentTime = 0;
        } else if (contador.sons.tocando=='Dance_Monkey') {
            this.Dance_Monkey.pause()
            this.Dance_Monkey.currentTime = 0;
        } else if (contador.sons.tocando=='Dorime_Ameno') {
            this.Dorime_Ameno.pause()
            this.Dorime_Ameno.currentTime = 0;
        } else if (contador.sons.tocando=='Old_Town_Road') {
            this.Old_Town_Road.pause()
            this.Old_Town_Road.currentTime = 0;
        }
    }
}
let alarmes = []

dom.modal.span.onclick = function() {
    dom.modal.div.style.display = "none"
    sons.pararOSom()
}
window.onclick = function(event) {
    if(event.target == dom.modal.div) {
        dom.modal.div.style.display = "none"
        sons.pararOSom()
    }
}
window.onload = (event) => {
    dom.timer.selectDasMusicas()
    dom.alarme.selectDasMusicas()
    funcao.alarme = window.setInterval(function() {
        data.alarme = new Date()
        for (let i in alarmes) {
            if (alarmes[i][4]==true) {
                if (alarmes[i][0].getHours()==data.alarme.getHours()&&alarmes[i][0].getMinutes()==data.alarme.getMinutes()) {
                    continue
                } else {
                alarmes[i][4]==false
                }
            }
            if (alarmes[i][0].getHours()==data.alarme.getHours()&&alarmes[i][0].getMinutes()==data.alarme.getMinutes()&&alarmes[i][3]==true) {
                alarmes[i][4]=true
                sons.escolherOSom(alarmes[i][5])
                contador.sons.tocando = alarmes[i][5]
                dom.modal.texto.innerHTML = `<strong>Alarme!</strong><br/>${("0" + alarmes[i][0].getHours()).slice(-2)}:${("0" + alarmes[i][0].getMinutes()).slice(-2)}`
                dom.modal.div.style.display = "block";
            }
        }
    }, 1000);
    funcao.relogio = window.setInterval(function() {
        dom.relogio.principal.innerHTML = data.horaCerta()
    }, 500);
};

function mostrarTodosAlarmes(){
    for (let i in alarmes) {
        dom.alarme.principal.innerHTML += `
            <table class="alarme"><tr>
                <td></td>
                <td>${("0" + alarmes[i][0].getHours()).slice(-2)}:${("0" + alarmes[i][0].getMinutes()).slice(-2)}</td>
                <td></td>
                <td><div class="slideCheck"><input type="checkbox" value="None" id="alarme${i}" name="alarmeOn" onclick="mudaStatusAlarme(${i})" ${alarmes[i][3]==true ?'checked':''}/><label class="ativar" for="alarme${i}"></label></div></td>
                <td></td>
            </tr></table>
        `
    }
}
function mudaStatusAlarme(interacao){
    alarmes[interacao][3] = alarmes[interacao][3]==true?false:true
}
function addAlarme() {
    dom.limparEsconderOuMostrarTela(dom.alarme.nome, 0, ['icones'])
    dom.limparEsconderOuMostrarTela(dom.alarme.nome, 2, ['secundario'])
    dom.alarme.principal.innerHTML = `
        <input class="relogio" name="hora" id="hora" type="number" placeholder="Hor" min="0" max="23">
        <span>:</span>
        <input class="relogio" name="minuto" id="minuto" type="number" placeholder="Min" min="0" max="59">
        `
    dom.adicionarIcone(dom.alarme.nome, 'cancel', 'ok')
}
function cancelAlarme() {
    dom.limparEsconderOuMostrarTela(dom.alarme.nome, 0, ['principal', 'icones'])
    dom.limparEsconderOuMostrarTela(dom.alarme.nome, 1, ['secundario'])
    mostrarTodosAlarmes()
    dom.adicionarIcone(dom.alarme.nome, 'add')
}
function okAlarme() {
    dom.alarme.hora = document.querySelector('input#hora')
    dom.alarme.minuto = document.querySelector('input#minuto')
    dom.alarme.musica = document.querySelector('select.musica')
    valor.alarme.hora = Number(dom.alarme.hora.value)
    valor.alarme.minuto = Number(dom.alarme.minuto.value)
    let jaTem = false
    let quale
    for (i in alarmes) {
        if (alarmes[i][1] == valor.alarme.hora && alarmes[i][2] == valor.alarme.minuto) {
            jaTem = true
            quale = i
        }
    }
    if ((dom.alarme.hora.value.length==0||dom.alarme.minuto.value.length==0)) {
        alert(`Valores Incorretos Digitados!\nDigite um horário válido!`)
    } else if (valor.alarme.hora > 23 || valor.alarme.minuto > 59) {
        alert(`Valores Incorretos Digitados!\nValores Máximos:\nHora: 23\nMinuto: 59`)
    } else if (jaTem) {
        const ativar = confirm('Alarme já adicionado!\nDeseja Ativa-lo?')
        if (ativar) {
            alarmes[quale][3] = true
        } else {
            alarmes[quale][3] = false
        }
        dom.limparEsconderOuMostrarTela(dom.alarme.nome, 0, ['principal', 'icones'])
        dom.limparEsconderOuMostrarTela(dom.alarme.nome, 1, ['secundario'])
        mostrarTodosAlarmes()
        dom.adicionarIcone(dom.alarme.nome, 'add')
    } else {
        dom.limparEsconderOuMostrarTela(dom.alarme.nome, 0, ['icones'])
        let segurando = new Date()
        segurando.setHours(valor.alarme.hora,valor.alarme.minuto,0,0)
        // Valores:     Date()          hora              minuto        check jaTocou          musica
        alarmes.push([segurando, valor.alarme.hora, valor.alarme.minuto, true, false, dom.alarme.musica.value])
        alarmes.sort(function(a, b) {
            if (a[1]<b[1]) return -1;
            if (a[1]>b[1]) return 1;
            if (a[1]==b[1]) { if (a[2]<b[2]) return -1; if (a[2]>b[2]) return 1; }
        })
        dom.limparEsconderOuMostrarTela(dom.alarme.nome, 0, ['principal'])
        dom.limparEsconderOuMostrarTela(dom.alarme.nome, 1, ['secundario'])
        mostrarTodosAlarmes()
        dom.adicionarIcone(dom.alarme.nome, 'add')
    }
}

function playCronometro(){
    dom.limparEsconderOuMostrarTela(dom.cronometro.nome, 0, ['icones', 'principal'])
    data.cronometro.principal.setHours(0,0,0,0)
    funcao.timer = window.setInterval(function() {
       dom.cronometro.principal.innerHTML = data.botaUmCentesimo()
    }, 10);
    dom.adicionarIcone(dom.cronometro.nome, 'lap', 'pause')
}
