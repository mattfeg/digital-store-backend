import { Link } from "react-router-dom";

const MinhasInformações = () => {


  return (
    <main className="flex min-h-screen items-center justify-center bg-light-gray-3">
        <section className="bg-white w-[315px] h-[466px] lg:w-[890px] lg:h-[466px] flex flex-col items-start justify-start p-5 font-sans rounded">
              <div className="w-full flex justify-between mt-1">
                <h6 className="font-bold text-sm tracking-[0.75px] leading-[22px] text-dark-gray-2">Minhas Infomações</h6>
                <Link to="/editar"
                className="text-primary-1 hover:text-tertiary underline font-semibold text-sm tracking-wide mr-3 lg:mr-4 underline-offset-[3px]" 
                >Editar</Link>
              </div>
              <div className=" w-full border-t border-light-gray-2 my-3"></div>
              <div className="">
                <h5 className="font-bold text-base tracking-[0.75px] mb-2 text-dark-gray-2" >Informações Pessoais</h5>
                <dl className="font-medium text-sm leading-[22px] tracking-[0.25px] ">
                  <div className="flex gap-2 mb-[10px]">
                    <dt className=" text-light-gray">Nome:</dt>
                    <dd>Francisco Antonio Pereira</dd>
                  </div>
                  <div className="flex gap-2 mb-[10px]">
                    <dt className="text-light-gray">CPF:</dt>
                    <dd>123485913-35</dd>
                  </div>
                  <div className="flex gap-2 mb-[10px]">
                    <dt className="text-light-gray">Email</dt>
                    <dd>francisco@gmail.com</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-light-gray">Celular</dt>
                    <dd>(85) 5555-5555</dd>
                  </div>
                </dl>
              </div>
              <div className="w-full border-t border-gray-300 my-3"></div>
              <div >
                <h5 className="font-bold text-base tracking-[0.75px] mb-2 text-dark-gray-2">Informações de Entrega</h5>
                <dl className="font-medium text-sm leading-[22px] tracking-[0.25px]">
                  <div className="flex gap-2 mb-[10px]">
                    <dt className="text-light-gray">Endereço:</dt>
                    <dd>Rua João Pessoa, 333</dd>
                  </div>
                  <div className="flex gap-2 mb-[10px]">
                    <dt className="text-light-gray">Bairro:</dt>
                    <dd>Centro</dd>
                  </div>
                  <div className="flex gap-2 mb-[10px]">
                    <dt className="text-light-gray">Cidade:</dt>
                    <dd>Fortaleza, Ceará</dd>
                  </div>
                  <div className="flex gap-2 mb-[10px]">
                    <dt className="text-light-gray">CEP:</dt>
                    <dd>(85) 433-8800</dd>
                  </div>
                </dl>
              </div>
        </section>
    </main>
  );
};

export default MinhasInformações;
