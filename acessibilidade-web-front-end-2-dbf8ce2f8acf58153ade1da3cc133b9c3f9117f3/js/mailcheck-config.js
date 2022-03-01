var campoEmail = document.querySelector('#email')
var sugestao = document.querySelector('#sugestao')

var domains = ['gmail.com', 'uol.com', 'outlook.com', 'alura.com.br'];
var secondLevelDomains = ['hotmail']
var topLevelDomains = ["com", "net", "org", "br"];

campoEmail.addEventListener('blur', function() {
    Mailcheck.run({
        email: campoEmail.value,
        domains: domains,                       // optional
        topLevelDomains: topLevelDomains,       // optional
        secondLevelDomains: secondLevelDomains, // optional
        suggested: function(suggestion) {
          // callback code
          sugestao.style.display = 'inline-block';
          sugestao.textContent = 'Você quis dizer: ' + suggestion.full + ' ?';
          sugestao.parentNode.classList.add('contatoCampo--sucesso');
          campoEmail.classList.add('contatoCampo--validouErro')
          sugestao.setAttribute('tabindex', '0');
          sugestao.setAttribute('role', 'alert');
        }
    });
});