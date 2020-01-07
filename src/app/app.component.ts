import { Component, ViewChild, OnInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent, TableService, QuickToolbarService, ImageSettingsModel, FontSizeModel } from '@syncfusion/ej2-angular-richtexteditor';
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

  // valor: string = `<html><head><title></title>\r\n</head>\r\n<body bgcolor=\"#ffffff\" leftmargin=76 topmargin=0 rightmargin=75 bottommargin=75>\r\n<font size=3 color=\"#000000\" face=\"Times New Roman\">\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center><b><br></b></div>\r\n<div align=center>Ilm&#186; Sr. Oficial do Registro Civil das Pessoas Natirais da Comcarca de Tatu&#237;/SP</div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=justify>&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Eu,&nbsp;&lt;&lt;Testemunha Qualificada&gt;&gt;, abaixo assinado, juntando o Termo de Casamento Religioso para efeito civil do <b>Sr.&nbsp;&lt;&lt;Nome De Casado Do Noivo&gt;&gt;</b> e da <b>Sra.&nbsp;&lt;&lt;Nome De Casada Da Noiva&gt;&gt;</b>, celebrado em&nbsp;&lt;&lt;Data Da Celebra&#231;&#227;o:1&gt;&gt;,&nbsp;&lt;&lt;Local Da Celebra&#231;&#227;o&gt;&gt;, situada na&nbsp;&lt;&lt;Endere&#231;o Da Celebra&#231;&#227;o&gt;&gt;, em&nbsp;Tatu&#237;, nos termos da Lei dos Registros P&#250;blicos, n&#186; 6.015 de 31 de Dezembro de 1973, vem requerer que a V. S&#170;., seja o mesmo registrado no livro competente deste cart&#243;rio, para que produza os efeitos legais.</div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center>Neste termos, pede deferimento</div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center>Tatu&#237;, &nbsp;&lt;&lt;Data por extenso&gt;&gt;</div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center><br></div>\r\n<div align=center>_______________________________</div>\r\n<div align=center>&lt;&lt;Testemunha qualificada&gt;&gt;</div>\r\n</font>\r\n</body></html>\r\n`;
  // valor: string = ``;
  valor: string = `<div align=\"center\">&nbsp;</div>\n\n<div align=\"center\">\n<table border=\"0\" cellpadding=\"90\" cellspacing=\"1\" style=\"width:900px;\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td>\n\t\t\t<div style=\"text-align: center;\"><span style=\"font-size:48px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i><u>Certid&atilde;o de Batismo</u></i></b></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: center;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i>Data da celebra&ccedil;&atilde;o:</i></b></font><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</font><font color=\"#000000\"><i>&lt;&lt;Data da celebra&ccedil;&atilde;o:1&gt;&gt;</i></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i>Local:</i></b></font><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</font><font color=\"#000000\"><i>&lt;&lt;Local da celebra&ccedil;&atilde;o&gt;&gt;</i></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i>Celebrante:</i></b></font><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </font><font color=\"#000000\"><i>&lt;&lt;Celebrante&gt;&gt;</i></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i>Batizando:</i></b></font><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</font><font color=\"#000000\"><b><i>&lt;&lt;BATIZANDO&gt;&gt;</i></b></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i>Data de nascimento:</i></b></font><font face=\"Arial\"> &nbsp; &nbsp; &nbsp; </font><font color=\"#000000\"><i>&lt;&lt;Data de nasc. batizando:1&gt;&gt;</i><b><i>&lt;&lt;SE Pai=;;</i></b></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i>Local de Nascimento : &nbsp; &nbsp; &nbsp;</i></b><i>&lt;&lt;Cidade natal - batizando&gt;&gt;</i></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i>Nome do pai: &nbsp; &nbsp; &nbsp; &nbsp;</i></b></font><font color=\"#000000\"><b><i>&gt;&gt;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</i></b></font><font color=\"#000000\"><i>&lt;&lt;PAI&gt;&gt;</i><b><i>&lt;&lt;SE M&atilde;e=;;</i></b></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i>Nome da m&atilde;e: &nbsp; &nbsp; &nbsp; &nbsp;</i></b></font><font color=\"#000000\"><b><i>&gt;&gt;&nbsp; &nbsp; &nbsp; &nbsp;</i></b><i>&lt;&lt;M&Atilde;E&gt;&gt;</i></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i>Padrinhos: </i></b></font><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </font><font color=\"#000000\"><i>&lt;&lt;Padrinho&gt;&gt;</i></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</font><font color=\"#000000\"><i>&lt;&lt;Madrinha&gt;&gt;</i><b><i>&lt;&lt;SE Testemunhas=;;</i></b></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><b><i>Testemunha(s): &nbsp; &nbsp; &nbsp; &nbsp;</i></b></font><font color=\"#000000\"><b><i>&gt;&gt;</i></b><i>&lt;&lt;Testemunhas&gt;&gt;</i></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: center;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp;</font><font color=\"#000000\"><b><i>Livro:</i></b></font><font face=\"Arial\"> &nbsp; &nbsp; &nbsp; &nbsp;</font><font color=\"#000000\"><font face=\"Times\"><i>&lt;&lt;Livro&gt;&gt;</i></font></font><font face=\"Arial\"> &nbsp; &nbsp; &nbsp; &nbsp;</font><font color=\"#000000\"><b><i>Folha:</i></b></font><font face=\"Arial\"> &nbsp; &nbsp; &nbsp; &nbsp;</font><font color=\"#000000\"><font face=\"Times\"><i>&lt;&lt;Folha&gt;&gt;</i></font></font><font face=\"Arial\"> &nbsp; &nbsp; &nbsp; &nbsp;</font><font color=\"#000000\"><b><i>N&uacute;mero:</i></b></font><font face=\"Arial\"> &nbsp; &nbsp; &nbsp; &nbsp;</font><font color=\"#000000\"><font face=\"Times\"><i>&lt;&lt;N&uacute;mero&gt;&gt;</i></font></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: center;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"color:#000000\"><span style=\"font-size:18px\"><span style=\"font-family:Times New Roman,Times,serif\"><b>&lt;&lt;SE Observa&ccedil;&atilde;o!;Observa&ccedil;&atilde;o: ;&gt;&gt;&nbsp;</b>&lt;&lt;Observa&ccedil;&atilde;o&gt;&gt;</span></span></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">\n\t\t\t<p style=\"margin:0cm 0cm 6pt; text-align:left\"><span style=\"color:#000000\"><span style=\"font-size:18px\"><span style=\"font-family:Times New Roman,Times,serif\"><b>&lt;&lt;SE Averba&ccedil;&atilde;o!;Averba&ccedil;&atilde;o:;&gt;&gt;</b></span></span></span></p>\n\n\t\t\t<p style=\"margin:0cm 0cm 6pt; text-align:left\"><span style=\"color:#000000\"><span style=\"font-size:18px\"><span style=\"font-family:Times New Roman,Times,serif\"><b>&lt;&lt;SE Averba&ccedil;&atilde;o!;&lt;&lt;Averba&ccedil;&atilde;o&gt;&gt;;&gt;&gt;</b></span></span></span></p>\n\t\t\t</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp;</font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:18px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><font face=\"Times\"><b><i>Para constar mandei lavrar esta certid&atilde;o que assino. </i></b></font></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:18px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><font face=\"Times\"><b><i>&quot;Ita in fide p&aacute;rochi&quot;.</i></b></font></font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:18px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp;</font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: right;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><i>&nbsp; &nbsp; &nbsp; &nbsp;&lt;&lt;MUNIC&Iacute;PIO&gt;&gt;</i><font face=\"Arial\">, </font><i>&lt;&lt;Data de emiss&atilde;o:1&gt;&gt;</i></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: justify;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp;</font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: justify;\">&nbsp;</div>\n\n\t\t\t<div style=\"text-align: center;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font face=\"Arial\">&nbsp; &nbsp; ___________________________________</font></font></font></span></div>\n\n\t\t\t<div style=\"text-align: center;\"><span style=\"font-size:20px;\"><font color=\"#000000\"><font face=\"Times New Roman\"><font color=\"#000000\"><font face=\"Times\"><i>&nbsp; &nbsp;</i></font></font></font></font></span><i style=\"color: rgb(0, 0, 0); font-family: &quot;Times New Roman&quot;, Times, serif; font-size: 18px;\">&lt;&lt;SE Respons&aacute;vel!;&lt;&lt;Respons&aacute;vel&gt;&gt;;&lt;&lt;Administrador&gt;&gt;&gt;&gt;</i>\n\n\t\t\t<div style=\"text-align:center\"><span style=\"font-size:18px\"><span style=\"font-family:Times New Roman,Times,serif\"><font color=\"#000000\"><font color=\"#000000\"><b><i>&lt;&lt;SE Respons&aacute;vel!;&lt;&lt;Fun&ccedil;&atilde;o do respons&aacute;vel&gt;&gt;;&lt;&lt;Fun&ccedil;&atilde;o do administrador&gt;&gt;&gt;&gt;</i></b></font></font></span></span></div>\n\t\t\t</div>\n\t\t\t</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p>&nbsp;</p>\n</div>\n\n<div align=\"center\"><font color=\"#000000\" face=\"Times New Roman\" size=\"3\"><font face=\"Arial\">&nbsp; &nbsp; &nbsp; &nbsp;</font></font></div>\n\n<p>\n<style id=\"theosImagemBackground\" type=\"text/css\">body {\n                                ;\n\t\t                        background-repeat: no-repeat;\n                                background-position: inherit;\n                                background-size: cover;\n                                line-height: px !important;\n                            }\n</style>\n</p>\n`;
  imageSettings: ImageSettingsModel = {
    saveFormat: 'Base64',
    maxHeight: 500,
    maxWidth: 750,
    resize: false
  }
  fontSize: FontSizeModel = {
    default: '16px',
    items: [
      { text: "8 px", value: "8px", command: "Font", subCommand: "FontSize" },
      { text: "9 px", value: "9px", command: "Font", subCommand: "FontSize" },
      { text: "10 px", value: "10px", command: "Font", subCommand: "FontSize" },
      { text: "11 px", value: "11px", command: "Font", subCommand: "FontSize" },
      { text: "12 px", value: "12px", command: "Font", subCommand: "FontSize" },
      { text: "14 px", value: "14px", command: "Font", subCommand: "FontSize" },
      { text: "16 px", value: "16px", command: "Font", subCommand: "FontSize" },
      { text: "18 px", value: "18px", command: "Font", subCommand: "FontSize" },
      { text: "20 px", value: "20px", command: "Font", subCommand: "FontSize" },
      { text: "22 px", value: "22px", command: "Font", subCommand: "FontSize" },
      { text: "24 px", value: "24px", command: "Font", subCommand: "FontSize" },
      { text: "26 px", value: "26px", command: "Font", subCommand: "FontSize" },
      { text: "28 px", value: "28px", command: "Font", subCommand: "FontSize" },
      { text: "36 px", value: "36px", command: "Font", subCommand: "FontSize" },
      { text: "48 px", value: "48px", command: "Font", subCommand: "FontSize" },
      { text: "72 px", value: "72px", command: "Font", subCommand: "FontSize" },
    ]
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
  public tools: object = {
    items: [
      'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'SubScript',
      'SuperScript', '|', 'ClearFormat', 'Alignments', 'Indent', 'Outdent', '|',
      'Image', {
        tooltipText: 'Inserir imagem de fundo',
        template: `<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"><span class="fa fa-scroll"></span></div></button>`
      }, 'CreateTable', '|', 'OrderedList', 'UnorderedList', '|', 'Cut', 'Copy', '|', 'Undo', 'Redo',
    ]
  };
  private listboxEle: any;
  private listboxEleDisponivel: any;
  private editArea: any;
  paramRange: Range;

  constructor(public _http: HttpClient) {
    this.formCondicao = new FormBuilder().group({
      campo: null,
      condicao: '=',
      textoCondicao: null,
      mostrarVerdadeiro: null,
      mostrarFalso: null
    });
  }
  ngOnInit() {
    this.rteObj.fontSize = this.fontSize;
    this.rteObj.blur.subscribe(_ => {
      this.paramRange = this.rteObj.getRange();
    });
    this.rteObj.enableHtmlEncode = false;
    this.rteObj.imageSelected.subscribe(_ => { });
  }
  async getLanguage(): Promise<any> {
    return await this._http.get('./assets/pt.json').toPromise();
  }
  async criou() {
    L10n.load(await this.getLanguage());
    this.rteObj.locale = 'pt';

    setTimeout(_ => {
      let customBtn: HTMLElement = document.getElementById('custom_tbar') as HTMLElement;
      customBtn.addEventListener('click', (e) => {
        document.getElementById('defaultRTErte-view').style.backgroundImage = `url('https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg')`;
      });
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