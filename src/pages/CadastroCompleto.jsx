import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

const CadastroCompleto = () => {
  return (
    <div style={{ fontFamily: "Inter" }}>
      <section
        className="informacoesPessoais"
        style={{
          color: "#474747",
          width: "750px",
          margin: "4px 380px",
          border: "2px solid black",
        }}
      >
        <form style={{ textAlign: "center" }}>
          <h2 style={{ letterSpacing: "1px" }}>Criar Conta</h2>
          <h4 style={{ textDecoration: "underline" }}>Informações Pessoais</h4>
          <label htmlFor="nomecompleto">Nome Completo *</label>
          <input
            style={{ margin: "auto", display: "block" }}
            id="nomecompleto"
            type="text"
            placeholder="Insira seu nome"
            required
          />

          <label htmlFor="cpf">CPF *</label>
          <input
            style={{ margin: "auto", display: "block" }}
            id="cpf"
            type="number"
            placeholder="Insira seu CPF"
            required
          />

          <label htmlFor="email">E-mail *</label>
          <input
            style={{ margin: "auto", display: "block" }}
            type="email"
            name=""
            id="email"
            placeholder="Insira seu e-mail"
            required
          />

          <label htmlFor="celular">Celular *</label>
          <input
            style={{ margin: "auto", display: "block" }}
            type="tel"
            name=""
            id="celular"
            placeholder="Insira seu celular"
          />
        </form>
      </section>
      <section
        className="informacoesDeEntrega"
        style={{
          color: "#474747",
          width: "750px",
          margin: "4px 380px",
          border: "2px solid black",
        }}
      >
        <form style={{ textAlign: "center" }}>
          <h4 style={{ textDecoration: "underline" }}>
            Informações de Entrega
          </h4>
          <label htmlFor="cep">CEP *</label>
          <input
            style={{ margin: "auto", display: "block" }}
            id="cep"
            type="number"
            placeholder="Insira seu cep"
            required
          />

          <label htmlFor="endereco">Endereço *</label>
          <input
            style={{ margin: "auto", display: "block" }}
            id="endereco"
            type="text"
            placeholder="Insira seu endereço"
            required
          />

          <label htmlFor="bairro">Bairro *</label>
          <input
            style={{ margin: "auto", display: "block" }}
            type="text"
            name=""
            id="bairro"
            placeholder="Insira seu bairro"
            required
          />

          <label htmlFor="cidade">Cidade *</label>
          <input
            style={{ margin: "auto", display: "block" }}
            type="text"
            name=""
            id="cidade"
            placeholder="Insira sua cidade"
          />

          <label htmlFor="complemento">Complemento </label>
          <input
            style={{ margin: "auto", display: "block" }}
            type="tel"
            name=""
            id="complemento"
            placeholder="Insira complemento"
          />
        </form>
      </section>
      <input
        style={{ margin: "4px 380px", display: "inline-block" }}
        type="checkbox"
        name=""
      />
      <label
        style={{
          padding: "10px",
          margin: "0px 380px",
          textAlign: "center",
          display: "inline-block",
        }}
        htmlFor=""
      >
        Quero receber por email ofertas e novidades das lojas da Digital Store.
        A frequência de envios pode variar de acordo com a interação do cliente.
      </label>
      <button
        style={{
          width: "750px",
          height: "28px",
          margin: "4px 380px",
          background: "#C92071",
          color: "#FFFFFF",
        }}
      >
        Criar Conta
      </button>
    </div>
  );
};

export default CadastroCompleto;
