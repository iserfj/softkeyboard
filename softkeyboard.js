/* Soft Keyboard - By iserfj
 * https://www.encolorful.com/
 *
 * Usage:
 * Simply add the following elements to your HTML DOM. Then add a class skbinput to the element you'd like input such as input/textarea or even editable div respectively.
 *
*/
(function () {document.getElementById("skb").innerHTML = `<table id="softkeyboard" class="lowercase" unselectable="on" onselectstart="return false;" style="user-select: none; -moz-user-select: none; display: none;"><tobdy><tr><th colspan="14">Soft Keyboard - <a href="https://www.encolorful.com/" target="_blank">www.encolorful.com</a></th><th><a id="skbreposition" href="javascript: softkeyboardreposition();" title="Reset position">&circlearrowright;</a></th>
</tr><tr><td key1="\`" key2="~" id="skb\`"><span class="unshift">\`</span><span class="shift">~</span></td><td key1="1" key2="!" id="skb1"><span class="unshift">1</span><span class="shift">!</span></td><td key1="2" key2="@" id="skb2"><span class="unshift">2</span><span class="shift">@</span></td><td key1="3" key2="#" id="skb3"><span class="unshift">3</span><span class="shift">#</span></td><td key1="4" key2="$" id="skb4"><span class="unshift">4</span><span class="shift">$</span></td><td key1="5" key2="%" id="skb5"><span class="unshift">5</span><span class="shift">%</span></td><td key1="6" key2="^" id="skb6"><span class="unshift">6</span><span class="shift">^</span></td><td key1="7" key2="&" id="skb7"><span class="unshift">7</span><span class="shift">&</span></td><td key1="8" key2="*" id="skb8"><span class="unshift">8</span><span class="shift">*</span></td><td key1="9" key2="(" id="skb9"><span class="unshift">9</span><span class="shift">(</span></td><td key1="0" key2=")" id="skb0"><span class="unshift">0</span><span class="shift">)</span></td><td key1="-" key2="_" id="skb-"><span class="unshift">-</span><span class="shift">_</span></td><td key1="=" key2="+" id="skb="><span class="unshift">=</span><span class="shift">+</span></td><td key1="" key2="" id="skbbackspace" colspan="2">←</td></tr><tr><td key1="    " key2="    " id="skbtab" colspan="2">TAB</td><td key1="q" key2="Q" id="skbq"><span class="unshift">q</span><span class="shift">Q</span></td><td key1="w" key2="W" id="skbw"><span class="unshift">w</span><span class="shift">W</span></td><td key1="e" key2="E" id="skbe"><span class="unshift">e</span><span class="shift">E</span></td><td key1="r" key2="R" id="skbr"><span class="unshift">r</span><span class="shift">R</span></td><td key1="t" key2="T" id="skbt"><span class="unshift">t</span><span class="shift">T</span></td><td key1="y" key2="Y" id="skby"><span class="unshift">y</span><span class="shift">Y</span></td><td key1="u" key2="U" id="skbu"><span class="unshift">u</span><span class="shift">U</span></td><td key1="i" key2="I" id="skbi"><span class="unshift">i</span><span class="shift">I</span></td><td key1="o" key2="O" id="skbo"><span class="unshift">o</span><span class="shift">O</span></td><td key1="p" key2="P" id="skbp"><span class="unshift">p</span><span class="shift">P</span></td><td key1="\\" key2="|" id="skb\\"><span class="unshift">\\</span><span class="shift">|</span></td><td key1="" key2="" id="skbclear" colspan="2">CLEAR</td>
</tr><tr><td key1=";" key2=":" id="skb;"><span class="unshift">;</span><span class="shift">:</span></td><td key1="'" key2='"' id="skb'"><span class="unshift">'</span><span class="shift">"</span></td><td key1="a" key2="A" id="skba"><span class="unshift">a</span><span class="shift">A</span></td><td key1="s" key2="S" id="skbs"><span class="unshift">s</span><span class="shift">S</span></td><td key1="d" key2="D" id="skbd"><span class="unshift">d</span><span class="shift">D</span></td><td key1="f" key2="F" id="skbf"><span class="unshift">f</span><span class="shift">F</span></td><td key1="g" key2="G" id="skbg"><span class="unshift">g</span><span class="shift">G</span></td><td key1="h" key2="H" id="skbh"><span class="unshift">h</span><span class="shift">H</span></td><td key1="j" key2="J" id="skbj"><span class="unshift">j</span><span class="shift">J</span></td><td key1="k" key2="K" id="skbk"><span class="unshift">k</span><span class="shift">K</span></td><td key1="l" key2="L" id="skbl"><span class="unshift">l</span><span class="shift">L</span></td><td key1="[" key2="{" id="skb["><span class="unshift">[</span><span class="shift">{</span></td><td key1="]" key2="}" id="skb]"><span class="unshift">]</span><span class="shift">}</span></td><td key1="\n" key2="\n" id="skbenter" colspan="2">ENTER</td></tr><tr><td key1="" key2="" id="skbshift" colspan="2">SHIFT</td><td key1="z" key2="Z" id="skbz"><span class="unshift">z</span><span class="shift">Z</span></td><td key1="x" key2="X" id="skbx"><span class="unshift">x</span><span class="shift">X</span></td><td key1="c" key2="C" id="skbc"><span class="unshift">c</span><span class="shift">C</span></td><td key1="v" key2="V" id="skbv"><span class="unshift">v</span><span class="shift">V</span></td><td key1="b" key2="B" id="skbb"><span class="unshift">b</span><span class="shift">B</span></td><td key1="n" key2="N" id="skbn"><span class="unshift">n</span><span class="shift">N</span></td><td key1="m" key2="M" id="skbm"><span class="unshift">m</span><span class="shift">M</span></td><td key1="," key2="&lt;" id="skb,"><span class="unshift">,</span><span class="shift">&lt;</span></td><td key1="." key2="&gt;" id="skb."><span class="unshift">.</span><span class="shift">&gt;</span></td><td key1="/" key2="?" id="skb/"><span class="unshift">/</span><span class="shift">?</span></td><td key1=" " key2=" " id="skbspace" colspan="2">SPACE</td><td key1="" key2="" id="skbhide" title="hide">&CircleTimes;</td></tr></tobdy></table>`;
    document.getElementById("skb").style.position = 'absolute';
    document.capslock = false;
    window.addEventListener('load', function () {
        document.querySelectorAll("#softkeyboard td").forEach(element => {
            element.addEventListener('click', function (element) {
                let el = element.target.tagName == 'TD' ? element.target : element.target.parentNode;
                let key = document.capslock ? el.getAttribute("key2") : el.getAttribute("key1");
                softkeypress(key, el);
            });
        });
        document.querySelectorAll(".skbinput").forEach(element => {
            element.addEventListener('focus', e => {
                document.skbtarget = e.target;
                document.getElementById("softkeyboard").style.display = 'table';
            });
        });
        softkeyboardreposition();
    });
    window.addEventListener('resize', function () {
        softkeyboardreposition();
    });
    function softkeyboardreposition() {
        let el = document.getElementById('skb');
        let width = el.clientWidth;
        el.style.left = (window.innerWidth - width) / 2 + 'px';
    }
    function shift() {
        var skb = document.getElementById("softkeyboard");
        document.capslock = !document.capslock;
        skb.classList.remove("uppercase");
        skb.classList.remove("lowercase");
        document.capslock ? skb.classList.add("uppercase") : skb.classList.add("lowercase");
    }
    function softkeypress(key, el) {
        if (el.getAttribute('id') == 'skbhide') {
            document.getElementById("softkeyboard").style.display = 'none';
            return;
        } else if (el.getAttribute('id') == 'skbshift') {
            shift();
            return;
        } else if (el.getAttribute('id') == 'skbbackspace') {
            if (document.skbtarget.tagName == 'INPUT') {
                var text = document.skbtarget.value;
                document.skbtarget.value = text.substr(0, text.length - 1);
            } else if (document.skbtarget.tagName == 'TEXTAREA') {
                var text = document.skbtarget.textContent;
                document.skbtarget.textContent = text.substr(0, text.length - 1);
            } else {
                var text = document.skbtarget.innerText;
                document.skbtarget.innerText = text.substr(0, text.length - 1);
            }
            return;
        } else if (el.getAttribute('id') == 'skbclear') {
            if (document.skbtarget.tagName == 'INPUT') {
                document.skbtarget.value = '';
            } else if (document.skbtarget.tagName == 'TEXTAREA') {
                document.skbtarget.textContent = '';
            } else {
                document.skbtarget.innerText = '';
            }
            return;
        } else if (el.getAttribute('id') == 'skbenter') {
            if (document.skbtarget.tagName == 'INPUT') {
                console.log(el);
                document.skbtarget.form.submit();
                return;
            }
        }
        if (document.skbtarget.tagName == 'INPUT') {
            document.skbtarget.value += key;
        } else if (document.skbtarget.tagName == 'TEXTAREA') {
            document.skbtarget.textContent += key;
        } else {
            document.skbtarget.innerText += key;
        }
    }
})();
