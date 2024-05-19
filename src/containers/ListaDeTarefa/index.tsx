import React, { useState } from 'react'; // Import React library
import Tarefa from "../../components/Tarefa"
import { Container } from "./styles"
import Modal from "../../components/Modal"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import { RootReducer } from '../../store';

const ListaDeTarefas = () => {
    const [modal, setModal] = useState(false);
    const { itens } = useSelector((state: RootReducer) => state.tarefas)

    return (
        <Container>
            <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
            <ul>
                {
                    itens.map(t => (
                        <li key={t.titulo}>
                        <Tarefa id={t.id} titulo={t.titulo} descricao={t.descricao} prioridade={t.prioridade} status={t.status}/>
                        </li>
                    ))
                }
            </ul>
            <Fab
                color="primary"
                aria-label="add"
                style={{ position: 'fixed', top: 20, right: 40 }}
                onClick={() => setModal(!modal)}
            >
                <AddIcon />
            </Fab>
            {
          modal
          && (
            <Modal
              setModal={setModal}
            />
          )
        }
        </Container>
    );
}

export default ListaDeTarefas