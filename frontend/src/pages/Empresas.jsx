import React, { useState, useEffect } from 'react';
import { getEmpresas, createEmpresa, deleteEmpresa } from '../services/api';

function Empresas() {
    // States da Página
    const [empresas, setEmpresas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // States do Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // States do Formulário (controlados)
    const [nome, setNome] = useState('');
    const [cnpj, setCnpj] = useState('');

    // Função para buscar os dados da API
    const fetchEmpresasData = async () => {
        try {
            setIsLoading(true);
            const data = await getEmpresas();
            setEmpresas(data);
        } catch (error) {
            console.error("Falha ao carregar empresas");
        } finally {
            setIsLoading(false);
        }
    };

    // useEffect para carregar os dados quando o componente montar
    useEffect(() => {
        fetchEmpresasData();
    }, []);

    // --- (CRUD) ---

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setNome('');
        setCnpj('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const novaEmpresaData = {
                nome_razao_social: nome,
                cpf_cnpj: cnpj,
                ativa: true
            };
            await createEmpresa(novaEmpresaData);

            handleCloseModal(); // Fecha o modal
            fetchEmpresasData(); // Atualiza a lista de empresas

        } catch (error) {
            alert("Erro ao criar empresa. Verifique o console.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir esta empresa?")) {
            try {
                await deleteEmpresa(id);
                // Atualiza a lista filtrando o item deletado
                setEmpresas(empresas.filter(empresa => empresa.id !== id));
            } catch (error) {
                alert("Erro ao deletar empresa.");
            }
        }
    };

    if (isLoading) {
        return <div>Carregando empresas...</div>;
    }

    return (
        <div>
            <h1>Gestão de Empresas</h1>
            <button onClick={handleOpenModal}>Nova Empresa</button>

            { }
            <table style={{ width: '100%', marginTop: '1rem' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome / Razão Social</th>
                        <th>CPF/CNPJ</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map(empresa => (
                        <tr key={empresa.id}>
                            <td>{empresa.id}</td>
                            <td>{empresa.nome_razao_social}</td>
                            <td>{empresa.cpf_cnpj}</td>
                            <td>{empresa.ativa ? 'Ativa' : 'Inativa'}</td>
                            <td>
                                { }
                                <button onClick={() => handleDelete(empresa.id)}>
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            { }
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Nova Empresa</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Nome / Razão Social:</label>
                                <input
                                    type="text"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>CPF/CNPJ:</label>
                                <input
                                    type="text"
                                    value={cnpj}
                                    onChange={(e) => setCnpj(e.target.value)}
                                    required
                                />
                            </div>
                            <div style={{ marginTop: '1rem' }}>
                                <button type="submit">Salvar</button>
                                <button type="button" onClick={handleCloseModal} style={{ marginLeft: '0.5rem' }}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Empresas;