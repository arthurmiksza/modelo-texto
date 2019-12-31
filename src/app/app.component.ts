import { Component, ViewChild, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent, TableService, QuickToolbarService } from '@syncfusion/ej2-angular-richtexteditor';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap';
import { L10n } from '@syncfusion/ej2-base';
import { HttpClient } from '@angular/common/http';

export interface IFormCondicao {
  campo: string,
  condicao: string,
  textoCondicao: string,
  mostrarVerdadeiro: string,
  mostrarFalso: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, QuickToolbarService]
})
export class AppComponent implements OnInit {
  @ViewChild('RTE', null) public rteObj: RichTextEditorComponent;
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  formCondicao: FormGroup;
  public tools: object = {
    items: [
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'SubScript',
      'SuperScript', '|', 'ClearFormat', 'Alignments', 'Indent', 'Outdent', '|',
      'Image', 'CreateTable', '|', 'OrderedList', 'UnorderedList', '|', 'Cut', 'Copy', '|', 'Undo', 'Redo',
    ]
  };
  // valor: string = `<html><head><title></title>\r\n</head>\r\n<body bgcolor=\"#ffffff\" leftmargin=76 topmargin=0 rightmargin=75 bottommargin=75>\r\n<font size=3 color=\"#000000\" face=\"Times New Roman\">\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center>Ilm&#186; Sr. Oficial do Registro Civil das Pessoas Natirais da Comcarca de Tatu&#237;/SP</div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=justify>&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Eu,&nbsp;&lt;&lt;Testemunha Qualificada&gt;&gt;, abaixo assinado, juntando o Termo de Casamento Religioso para efeito civil do <b>Sr.&nbsp;&lt;&lt;Nome De Casado Do Noivo&gt;&gt;</b> e da <b>Sra.&nbsp;&lt;&lt;Nome De Casada Da Noiva&gt;&gt;</b>, celebrado em&nbsp;&lt;&lt;Data Da Celebra&#231;&#227;o:1&gt;&gt;,&nbsp;&lt;&lt;Local Da Celebra&#231;&#227;o&gt;&gt;, situada na&nbsp;&lt;&lt;Endere&#231;o Da Celebra&#231;&#227;o&gt;&gt;, em&nbsp;Tatu&#237;, nos termos da Lei dos Registros P&#250;blicos, n&#186; 6.015 de 31 de Dezembro de 1973, vem requerer que a V. S&#170;., seja o mesmo registrado no livro competente deste cart&#243;rio, para que produza os efeitos legais.</div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center>Neste termos, pede deferimento</div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center>Tatu&#237;, &nbsp;&lt;&lt;Data por extenso&gt;&gt;</div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center>_______________________________</div>\r\n<div align=center>&lt;&lt;Testemunha qualificada&gt;&gt;</div>\r\n</font>\r\n</body></html>\r\n`;
  valor: string = ``;
  imageSettings = {
    saveFormat: "Base64",
    maxHeight: 500,
    maxWidth: 500
  }
  public data: { [key: string]: Object }[] = [
    { htmlText: `<<Administrador>>`, text: `Administrador`, id: 'list-01', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Diocese>>`, text: `Diocese`, id: 'list-02', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Paroquia>>`, text: `Paroquia`, id: 'list-03', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Usuario>>`, text: `Usuario`, id: 'list-14', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Municipio>>`, text: `Municipio`, id: 'list-15', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Endereço>>`, text: `Endereço`, id: 'list-16', "htmlAttributes": { draggable: true } }
  ];
  public dataDisponivel: { [key: string]: Object }[] = [
    { htmlText: `<<Esposo>>`, text: `Esposo`, id: 'list-04', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Marida>>`, text: `Marida`, id: 'list-05', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Padrinhos>>`, text: `Padrinhos`, id: 'list-06', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Padrinhas>>`, text: `Padrinhas`, id: 'list-07', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Madrinhos>>`, text: `Madrinhos`, id: 'list-08', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Madrinhas>>`, text: `Madrinhas`, id: 'list-09', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Tio>>`, text: `Tio`, id: 'list-10', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Tia>>`, text: `Tia`, id: 'list-11', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Mãe>>`, text: `Mãe`, id: 'list-12', "htmlAttributes": { draggable: true } },
    { htmlText: `<<Pai>>`, text: `Pai`, id: 'list-13', "htmlAttributes": { draggable: true } }
  ];
  private listboxEle: any;
  private listboxEleDisponivel: any;
  private editArea: any;
  paramRange: Range;

  constructor(public _http: HttpClient) {
    this.formCondicao = new FormBuilder().group({
      campo: null,
      condicao: null,
      textoCondicao: null,
      mostrarVerdadeiro: null,
      mostrarFalso: null
    });
  }
  ngOnInit() {
    this.rteObj.blur.subscribe(_ => {
      this.paramRange = this.rteObj.getRange();
    });
    this.rteObj.imageSelected.subscribe(_ => {
      console.log(_);
    });
  }
  async getLanguage(): Promise<any> {
    return await this._http.get('./assets/pt.json').toPromise();
  }
  async criou() {
    L10n.load(await this.getLanguage());
    this.rteObj.locale = 'pt';
    setTimeout(_ => {
      this.listboxEle = document.getElementById('listboxGeral');
      this.listboxEleDisponivel = document.getElementById('listboxDisponivel');
      this.editArea = document.querySelector("#defaultRTE .e-content");
      this.editArea.addEventListener("drop", this.dropHandler.bind(this));
      var that = this;
      [
        { list: this.listboxEle, data: that.data },
        { list: this.listboxEleDisponivel, data: that.dataDisponivel }
      ].forEach(element => {
        element.list.addEventListener("dragstart", (e) => {
          that.dataSetter(e, element.data);
          that.dragHelperSetter(e);
          that.editArea.classList.add('bordered');
        });
        element.list.addEventListener("drag", (e) => {
          that.dragHelperMove(e.clientX + 15, e.clientY + 15)
        });
        element.list.addEventListener("dragend", _ => {
          that.dragHelperDrop();
        });
        element.list.addEventListener("mouseup", (e) => {
          that.mouseUpHandler(e, element.data);
        });
      })
    }, 50)
  }
  dataSetter(ev, data) {
    ev.dataTransfer.setData("Text", ev.target.innerText);
    ev.dataTransfer.setData("HtmlText", data.filter(d => d.id == ev.target.id)[0].htmlText);
    let emptyImage = document.createElement('img');
    emptyImage.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    ev.dataTransfer.setDragImage(emptyImage, 0, 0, false);
  }
  dragHelperSetter(ev) {
    let drag = this.getDragHelper();
    drag.style.display = 'block';
    drag.innerHTML = `<i class="fas fa-arrows-alt"></i> ${ev.target.innerText}`;
  }
  dragHelperMove(x, y) {
    let drag = this.getDragHelper();
    drag.style.left = x + 'px';
    drag.style.top = y + 'px';
  }
  dragHelperDrop() {
    this.getDragHelper().style.display = 'none';
    this.dragHelperMove(-300, -300);
    this.editArea.classList.remove('bordered');
  }
  dropHandler(e) {
    this.dragHelperDrop();
    e.preventDefault();
    if (e.toElement.className.indexOf('teste') > -1) return;
    if (this.rteObj.inputElement.contains(e.target)) {
      this.rteObj.selectRange(this.getRange(e));
      if (this.rteObj.formatter.getUndoRedoStack().length === 0) {
        this.rteObj.formatter.saveData();
      }
      let text: string = e.dataTransfer.getData('HtmlText');
      this.insertText(text);
    }
  }
  getRange(e) {
    let range: Range;
    if (this.rteObj.contentModule.getDocument().caretRangeFromPoint) {
      range = this.rteObj.contentModule.getDocument().caretRangeFromPoint(e.clientX, e.clientY);
    } else if (e.rangeParent) {
      range = this.rteObj.contentModule.getDocument().createRange();
      range.setStart(e.rangeParent, e.rangeOffset);
    }
    return range;
  }
  mouseUpHandler(e, data) {
    this.insertText(data.filter(d => d.id == e.target.id)[0].htmlText);
  }
  insertText(text) {
    this.rteObj.executeCommand("insertText", text);
    this.rteObj.formatter.saveData();
    this.rteObj.formatter.enableUndo(this.rteObj);
  }
  get currentRange() {
    return this.rteObj.getRange();
  }
  addCondition() {
    this.rteObj.selectRange(this.paramRange);
    this.insertText(this.conditionBuilder(this.formCondicao.value));
    this.paramRange = this.currentRange;
  }
  conditionBuilder(data: IFormCondicao) {
    return `<<SE ${data.campo}${data.condicao}${data.textoCondicao};${data.mostrarVerdadeiro};${data.mostrarFalso}>>`;
  }
  getDragHelper() {
    return document.getElementById('drag-helper');
  }
}