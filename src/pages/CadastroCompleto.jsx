import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { InputMask } from 'primereact/inputmask';
import { data } from "autoprefixer";
        

const CadastroCompletoContainer = styled.div`
  background-color: #f9f8fe;
  & .informacoesPessoais,
  .informacoesDeEntrega {
    color: #474747;
    width: 750px;
    margin: 0 auto;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    background-color: #ffffff;
    padding: 30px;
    border-radius: 4px;
    gap: 20px;
  }

  & .informacoesDeEntrega {
    margin-top: 10px;
  }

  & .topo-form {
    margin: 70px 0px 22px 0;
    width: 440px;
    height: 36px;
    display: block;
    
}

  & h2 {
    letter-spacing: 1px;
    line-height: 36px;
    margin: 70px 656px 22px 344px;
    font-weight: 700;
    font-size: 32px;
    color: #1f1f1f;
    width: 440px;
    height: 36px;
  }

  & h4 {
    font-size: 14px;
    gap: 365px;
    width: 690px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    letter-spacing: 0.75px;
    line-height: 22px;
    color: #474747;
    border-bottom: 2px solid #cccccc;
  }

  & input {
    width: 690px;
    height: 60px;
    border-radius: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.75px;
    padding: 12px;
    display: block;
    background-color: #47474710;
    color: #666666;
  }

  & input:focus-visible {
    outline: 1px solid #c92071;
  }

  & input[type="checkbox"] {
    accent-color: #c92071;
  }

  & label {
    font-size: 12px;
    line-height: 24px;
    letter-spacing: 0.75px;
    width: 470.82px;
    height: 24px;
  }

  & .confirmacao {
    width: 750px;
    height: 44px;
    margin: 0 auto;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  & .confirmacao input {
    display: inline-block;
    width: 22px;
    height: 22px;
    align-items: center;
    margin-right: 10px;
  }

  & .confirmacao label {
    align-items: center;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.25px;
    color: #474747;
    padding-right: 32px;
  }

  & .btn {
    width: 750px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  & button {
    width: 750px;
    height: 48px;
    margin-top: 40px;
    background: #c92071;
    color: #f5f5f5;
    border-radius: 6px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.75px;
    text-align: center;
  }

  @media only screen and (max-width: 763px) {

  }
`;

const CadastroCompleto = () => {
  
  const {register, handleSubmit, setValue} = useForm();
  function carregarEndereco(cep) {
    if (cep.length == 9) {
      const cepTratado = cep.replace(/\D/g, '');
      fetch(`http://viacep.com.br/ws/${cepTratado}/json/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setValue("endereco", data.logradouro);
          setValue("bairro", data.bairro);
          setValue("cidade", data.localidade);
          setValue("uf", data.uf);

        });
    
    }

  }

  return (
    <CadastroCompletoContainer>
      
      <div className="topo-form">
      <h2 className="form-criar">Criar Conta</h2>      
      </div>
      <form>
        <section className="informacoesPessoais">
          <h4>Informações Pessoais</h4>
          <label htmlFor="nomecompleto">Nome Completo *</label>
          <input
            id="nomecompleto"
            type="text"
            placeholder="Insira seu nome"
            required
          />

          <label htmlFor="cpf">CPF *</label>
          <InputMask id="cpf" mask="999.999-999-99" placeholder="Insira seu CPF" required />

          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            name=""
            id="email"
            placeholder="Insira seu e-mail"
            required
          />

          <label htmlFor="celular">Celular *</label>
          <InputMask id="celular" mask="(99) 99999-9999" placeholder="Insira seu celular" required/>
        </section>
        <section className="informacoesDeEntrega">
          <h4>Informações de Entrega</h4>
          <label htmlFor="cep">CEP *</label>
          <InputMask id="cep" mask="99999-999" placeholder="Insira seu cep"
            onChange={(e) => carregarEndereco(e.target.value)}
           required />

          <label htmlFor="endereco">Endereço *</label>
          <input
            id="endereco"
            type="text"
            placeholder="Insira seu endereço"
            {...register("endereco")}
            required
          />

<label htmlFor="complemento">Número * </label>
          <input
            type="text"
            name=""
            id="numero"
            placeholder="Insira seu número"
          />

          <label htmlFor="complemento">Complemento </label>
          <input
            type="text"
            name=""
            id="complemento"
            placeholder="Insira complemento"
          />


          <label htmlFor="bairro">Bairro *</label>
          <input
            type="text"
            name=""
            id="bairro"
            placeholder="Insira seu bairro"
            {...register("bairro")}
            required
          />

          <label htmlFor="cidade">Cidade *</label>
          <input
            type="text"
            name=""
            id="cidade"
            placeholder="Insira sua cidade"
            {...register("cidade")} required
          />
          <label htmlFor="uf">Estado *</label>
          <input
            type="text"
            name=""
            id="uf"
            placeholder="Insira seu estado"
            {...register("uf")} required
          />
        </section>
        <section className="confirmacao">
          <input type="checkbox" name="" />
          <label htmlFor="">
            Quero receber por email ofertas e novidades das lojas da Digital
            Store. A frequência de envios pode variar de acordo com a interação
            do cliente.
          </label>
      <div className="btn">
         <button className="btn-confirmacao">Criar Conta</button>
      </div>
        </section>
      </form>
    </CadastroCompletoContainer>
  );
};

export default CadastroCompleto;
