import React from 'react';
import './style.css';
import Input from '../../components/Input';

export default () => {
    return (
        <form className="form-create-an-account">
            <span className="title-create-an-account">
                Crie sua conta
            </span>


            <Input type="text" placeholder="Nome completo"  />
            <Input type="text" placeholder="E-mail"  />

            <Input type="text" placeholder="Senha"  />
            <Input type="text" placeholder="Confirmar a senha"  />


            <Input type="submit" value="Acessar com o Facebook" />

            <Input type="submit" value="Criar Conta" />
        </form>
    );
}

