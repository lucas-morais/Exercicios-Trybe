import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa o funcionamento do campo "Email"', () => {

  it('Verifica se existe o campo Email', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });
  
  it('Verifica se existe botão de enviar', () => {
    render(<App />);
    const btn = screen.getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveProperty('type', 'button');
    expect(btn).toHaveValue('Enviar');
  });
  
  it('Verifica se existem dois botões', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('Verifica que, ao preencher o campo de email e clicar no botão, o texto é renderizado', () => {
    const EMAIL_USER = 'email@email.com';
    
    render(<App />)
    const textEmail = screen.getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const btnSend = screen.getByTestId('id-send');
    const inputEmail = screen.getByLabelText('Email')
    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(btnSend);

    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
})