import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg' 

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {localStorage.getItem('ongName')}</span>

                <Link className="button" to="/incidents/new">
                    Cadastrar novo caso
                </Link>
                <Link className="button-close" to="/">
                    <FiPower size={18} color="#e02041" />
                </Link>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Cadelinha atropelada</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>A cadelinha foi atropelada e precisa de cirurgia</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00 reais</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Cadelinha atropelada 2</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>A cadelinha foi atropelada e precisa de cirurgia</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00 reais</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Cadelinha atropelada 3</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>A cadelinha foi atropelada e precisa de cirurgia</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00 reais</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                <li>
                    <strong>CASO:</strong>
                    <p>Cadelinha atropelada 4</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>A cadelinha foi atropelada e precisa de cirurgia</p>
                    <strong>VALOR:</strong>
                    <p>R$ 120,00 reais</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    )
}