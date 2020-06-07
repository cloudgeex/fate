import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';

// Customization example
import { ExampleMentionDropdownComponent } from './example-mention-dropdown/example-mention-dropdown.component';
import { ExampleCustomHtmlParserService } from './example-custom-html-parser.service';
import { ExampleCustomParserService } from './example-custom-parser.service';

import { AppComponent } from './app.component';

import {
  FateModule,
  FateMaterialModule,
  FateHtmlParserService,
  FateParserService
} from './fate.module';
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faSubscript,
  faSuperscript,
  faIndent,
  faOutdent,
  faListOl,
  faListUl,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faUndoAlt,
  faRedoAlt,
  faEraser,
  faLink
} from '@fortawesome/free-solid-svg-icons';

// Add an icon to the library for convenient access in other components
export const icons: IconDefinition[] = [
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faSubscript,
  faSuperscript,
  faIndent,
  faOutdent,
  faListOl,
  faListUl,
  faAlignCenter,
  faAlignJustify,
  faAlignLeft,
  faAlignRight,
  faUndoAlt,
  faRedoAlt,
  faEraser,
  faLink
];

@NgModule({
  declarations: [AppComponent, ExampleMentionDropdownComponent],
  imports: [
    BrowserModule,
    FormsModule,
    FateModule,
    FateMaterialModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: FateHtmlParserService,
      useClass: ExampleCustomHtmlParserService
    },
    { provide: FateParserService, useClass: ExampleCustomParserService }
  ]
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...icons);
  }
}
