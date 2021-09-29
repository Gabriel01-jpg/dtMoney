import React, { useState } from 'react';


import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";


function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false);
    }

  return (

      <TransactionsProvider>
           <GlobalStyle />

           <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

           <Dashboard />

           <NewTransactionModal
               isOpen={isNewTransactionModalOpen }
               onRequestClose={handleCloseNewTransactionModal}
           />
      </TransactionsProvider>
  );
}

export default App;
