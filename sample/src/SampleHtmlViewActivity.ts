
///<reference path="../../dist/android-ui.d.ts"/>
///<reference path="../gen/R/layout.ts"/>

module sample.app {
    import Activity = android.app.Activity;
    import ActionBarActivity = android.app.ActionBarActivity;


    export class SampleHtmlViewActivity extends ActionBarActivity {
        onCreate():void {
            super.onCreate();
            this.setTitle('HtmlView');
            this.setContentView(R.layout.sample_htmlview);
        }
    }
}