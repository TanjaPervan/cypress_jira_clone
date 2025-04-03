class KanbanBoard{


visit() {cy.visit('https://jira.trungk18.com/project/board');

}

  elements={
    listColumnTitles: ()=>cy.get('.px-3.pb-4.pt-3.uppercase.text-textMedium.text-13.truncate'),
  }

}

export const kanbanBoard = new KanbanBoard();
