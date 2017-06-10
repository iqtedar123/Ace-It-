import { Component } from '@angular/core';

import { NavController, Platform, LoadingController } from 'ionic-angular';
import { AlertController, ToastController } from 'ionic-angular';
import { GooglePlus, AdMob } from 'ionic-native';
import { CourseGradePage } from "../coursegrade/coursegrade";

interface StringMap { [s: string]: Number; }
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    name1: any;
    name2: any;
    name3: any;
    name4: any;
    name5: any;
    name6: any;
    name7: any;
    name8: any;
    name9: any;
    name10: any;
    name11: any;
    name12: any;
    grade1: any;
    grade2: any;
    grade3: any;
    grade4: any;
    grade5: any;
    grade6: any;
    grade7: any;
    grade8: any;
    grade9: any;
    grade10: any;
    grade11: any;
    grade12: any;
    weight1: any;
    weight2: any;
    weight3: any;
    weight4: any;
    weight5: any;
    weight6: any;
    weight7: any;
    weight8: any;
    weight9: any;
    weight10: any;
    weight11: any;
    weight12: any;
    index: number;
    myHtml;
    constructor(public navCtrl: NavController, private alertCtrl: AlertController, private platform: Platform, private loadingControl: LoadingController, private toastCtrl: ToastController) {
        this.loadingControl = loadingControl;
        this.navCtrl = navCtrl;
        this.index = 6;
        this.myHtml = "";
        this.weight1 = '0.5';
        this.weight2 = '0.5';
        this.weight3 = '0.5';
        this.weight4 = '0.5';
        this.weight5 = '0.5';
        this.weight6 = '0.5';
        this.weight7 = '0.5';
        this.weight8 = '0.5';
        this.weight9 = '0.5';
        this.weight10 = '0.5';
        this.weight11 = '0.5';
        this.weight12 = '0.5';
        platform.ready().then(() => {

            var testId = 'ca-app-pub-6937425280917661/1053575230';
            var productionId = 'ca-app-pub-6937425280917661/1053575230';
            AdMob.createBanner({
                adId: productionId,
                adSize: 'SMART_BANNER',
                isTesting: false
            }).then(() => {
                AdMob.showBanner(2);
            });

        });
    }
    onLink(url: string) {
        window.open(url);
    }
    calculate() {
        let gpa = 0.0;
        console.log(this.name1);
        let percentageInputList = this.getPercentageInputList();
        let gradePointInputList = this.getGradePoints(percentageInputList);
        let courseWeightMap = this.getCourseWeight(percentageInputList);
        gpa = this.calculateGPA(gradePointInputList, courseWeightMap);
        if (gradePointInputList.size == 0) {
            let noGradeEnteredAlert = this.alertCtrl.create({
                title: 'No Grades Entered!',
                subTitle: 'Please enter a grade.',
                buttons: ['Dismiss']
            });
            noGradeEnteredAlert.present();
        } else if (courseWeightMap.size == 0) {
            let noWeightEnteredAlert = this.alertCtrl.create({
                title: 'No Weight Selected!',
                subTitle: 'Please select a course weight.',
                buttons: ['Dismiss']
            });
            noWeightEnteredAlert.present();
        } else {
            if (gpa == NaN) {
                let alert = this.alertCtrl.create({
                    title: 'Missing Required Inputs!',
                    subTitle: 'Please check that you have entered all grades and have selected all course weights.',
                    buttons: [{
                        text: 'Okay. Will do!',
                        handler: () => {

                        }
                    }]
                })
            } else {
                let alert = this.alertCtrl.create({
                    title: 'GPA Calculated!',
                    subTitle: 'Your GPA is: ' + gpa.toFixed(2),
                    buttons: [{
                        text: 'Dismiss',
                        handler: () => {

                        }
                    }]
                });
                alert.present();
            }
        }
    }
    getPercentageInputList() {
        //gets the percentage values for each field that is filled in. 

        let groupPercent = new Map<string, Number>();

        if (this.grade1 != undefined) {
            groupPercent.set('1', Number(this.grade1));
        }
        if (this.grade2 != undefined) {
            groupPercent.set('2', Number(this.grade2));
        } if (this.grade3 != undefined) {
            groupPercent.set('3', Number(this.grade3));
        } if (this.grade4 != undefined) {
            groupPercent.set('4', Number(this.grade4));
        } if (this.grade5 != undefined) {
            groupPercent.set('5', Number(this.grade5));
        } if (this.grade6 != undefined) {
            groupPercent.set('6', Number(this.grade6));
        } if (this.grade7 != undefined) {
            groupPercent.set('7', Number(this.grade7));
        } if (this.grade8 != undefined) {
            groupPercent.set('8', Number(this.grade8));
        } if (this.grade9 != undefined) {
            groupPercent.set('9', Number(this.grade9));
        } if (this.grade10 != undefined) {
            groupPercent.set('10', Number(this.grade10));
        } if (this.grade11 != undefined) {
            groupPercent.set('11', Number(this.grade11));
        } if (this.grade12 != undefined) {
            groupPercent.set('12', Number(this.grade12));
        }
        return groupPercent;
    }
    getGradePoints(groupPercent: Map<string, Number>) {
        //Gets the grade point equivalent for each grade. 
        let i = 0;
        let gradePointMap = new Map<string, string>();
        groupPercent.forEach((currentPercent: Number, key: string) => {
            if (currentPercent <= 100 && currentPercent >= 85) {
                //4.0
                gradePointMap.set(key, "4.0");
            } else if (currentPercent <= 84 && currentPercent >= 80) {
                gradePointMap.set(key, "3.7");
            } else if (currentPercent <= 79 && currentPercent >= 77) {
                gradePointMap.set(key, "3.3");
            } else if (currentPercent <= 76 && currentPercent >= 73) {
                gradePointMap.set(key, "3.0");
            }
            else if (currentPercent <= 72 && currentPercent >= 70) {
                gradePointMap.set(key, "2.7");
            }
            else if (currentPercent <= 69 && currentPercent >= 67) {
                gradePointMap.set(key, "2.3");
            }
            else if (currentPercent <= 66 && currentPercent >= 63) {
                gradePointMap.set(key, "2.0");
            } else if (currentPercent <= 62 && currentPercent >= 60) {
                gradePointMap.set(key, "1.7");
            } else if (currentPercent <= 59 && currentPercent >= 57) {
                gradePointMap.set(key, "1.3");
            } else if (currentPercent <= 56 && currentPercent >= 53) {
                gradePointMap.set(key, "1.0");
            } else if (currentPercent <= 52 && currentPercent >= 50) {
                gradePointMap.set(key, "0.7");
            } else if (currentPercent <= 49 && currentPercent >= 0) {
                gradePointMap.set(key, "0.0");
            }
        });
        return gradePointMap;
    }
    getCourseWeight(groupPercent: Map<string, Number>) {
        //Gets the course weight for each of the courses entered
        let courseWeightMap = new Map<string, number>();
        groupPercent.forEach((currentPercent: Number, key: string) => {
            if (key == '1') {
                courseWeightMap.set(key, Number(this.weight1));
            } else if (key == '2') {
                courseWeightMap.set(key, Number(this.weight2));
            } else if (key == '3') {
                courseWeightMap.set(key, Number(this.weight3));
            } else if (key == '4') {
                courseWeightMap.set(key, Number(this.weight4));
            } else if (key == '5') {
                courseWeightMap.set(key, Number(this.weight5));
            } else if (key == '6') {
                courseWeightMap.set(key, Number(this.weight6));
            } else if (key == '7') {
                courseWeightMap.set(key, Number(this.weight7));
            } else if (key == '8') {
                courseWeightMap.set(key, Number(this.weight8));
            } else if (key == '9') {
                courseWeightMap.set(key, Number(this.weight9));
            } else if (key == '10') {
                courseWeightMap.set(key, Number(this.weight10));
            } else if (key == '11') {
                courseWeightMap.set(key, Number(this.weight11));
            } else if (key == '12') {
                courseWeightMap.set(key, Number(this.weight12));
            }
        });
        return courseWeightMap;
    }
    calculateGPA(gradePointMap: Map<string, string>, courseWeightMap: Map<string, number>) {
        //Uses the grade point and course weight to calculate the gpa. 
        var gpa = 0;
        var weightSum = 0.0;
        gradePointMap.forEach((currentPoint: string, key: string) => {
            let currentProduct = 0.0;
            currentProduct = Number(currentPoint) * courseWeightMap.get(key);
            gpa = gpa + currentProduct;
            weightSum = weightSum + courseWeightMap.get(key);
        });
        gpa = gpa / weightSum;
        return gpa;
    }

    clearAll() {
        //Clear the input fields. 
        this.grade1 = undefined;
        this.grade2 = undefined;
        this.grade3 = undefined;
        this.grade4 = undefined;
        this.grade5 = undefined;
        this.grade6 = undefined;
        this.grade7 = undefined;
        this.grade8 = undefined;
        this.grade9 = undefined;
        this.grade10 = undefined;
        this.grade11 = undefined;
        this.grade12 = undefined;
        this.weight1 = '0.5';
        this.weight2 = '0.5';
        this.weight3 = '0.5';
        this.weight4 = '0.5';
        this.weight5 = '0.5';
        this.weight6 = '0.5';
        this.weight7 = '0.5';
        this.weight8 = '0.5';
        this.weight9 = '0.5';
        this.weight10 = '0.5';
        this.weight11 = '0.5';
        this.weight12 = '0.5';
        this.name1 = undefined;
        this.name2 = undefined;
        this.name3 = undefined;
        this.name4 = undefined;
        this.name5 = undefined;
        this.name8 = undefined;
        this.name9 = undefined;
        this.name10 = undefined;
        this.name11 = undefined;
        this.name12 = undefined;
        this.name6 = undefined;
        this.name7 = undefined;
    }
    goBack() {
        let alert = this.alertCtrl.create({
            title: 'Swiped',
            buttons: [{
                text: 'Dismiss',
                handler: () => {

                }
            }]
        });
        alert.present();
        this.navCtrl.push(CourseGradePage);
    }
    login() {
        let loading = this.loadingControl.create({
            content: 'Please wait...'
        });
        loading.present();
        GooglePlus.login({
            'webClientId': '1006825539066-28du38depd8c9g71en8c0h1b438d8gn6.apps.googleusercontent.com'
        }).then((res) => {
            loading.dismiss();
            loading = this.loadingControl.create({
                content: "Signed in"
            });
            loading.present();
            console.log(res);
        }, (err) => {
            loading.dismiss();
            //GooglePlus.login({
            //    'webClientId': '1006825539066-t0c2chq3btsoibrsdvl5frkl9pn105dd.apps.googleusercontent.com'
            //}).then((res) => {
            //    loading.dismiss();
            //    loading = this.loadingControl.create({
            //        content: "Signed in"
            //    });
            //    loading.present();
            //    console.log(res);
            //}, (err) => {
            //    loading.dismiss();
            //    GooglePlus.login({
            //        'webClientId': '1006825539066-k7e7oi54kdaq409tb8e7ungf57vninc9.apps.googleusercontent.com'
            //    }).then((res) => {
            //        loading.dismiss();
            //        loading = this.loadingControl.create({
            //            content: "Signed in"
            //        });
            //        loading.present();
            //        console.log(res);
            //    }, (err) => {
            //        loading.dismiss();
            //        GooglePlus.login({
            //            'webClientId': '1006825539066-6j2v43naudqnadchoe8s8u6439u9d9pa.apps.googleusercontent.com'
            //        }).then((res) => {
            //            loading.dismiss();
            //            loading = this.loadingControl.create({
            //                content: "Signed in"
            //            });
            //            loading.present();
            //            console.log(res);
            //        }, (err) => {
            //            loading.dismiss();
            //            loading = this.loadingControl.create({
            //                content: err
            //            });
            //            loading.present();
            //            console.log(err);
            //        });
            //    });
            //});
            loading = this.loadingControl.create({
                content: "ERROR SignING in: " + err
            });
            loading.present();
            console.log(err);
        });

    }

    logout() {

        GooglePlus.logout().then(() => {
            let noGradeEnteredAlert = this.alertCtrl.create({
                title: 'LOGGED OUt Grades Entered!',
                subTitle: 'Please enter a grade.',
                buttons: ['Dismiss']
            });
            noGradeEnteredAlert.present();
            console.log("logged out");
        });

    }
    addElement() {
        if (this.index > 12) {
            let alert = this.alertCtrl.create({
                title: "Limit Reached!",
                subTitle: "How many courses are you taking? 12 is more than enough.",
                buttons: ['Dismiss']
            });
            alert.present();
        } else {
            var card = document.getElementById("card" + this.index);

            card.removeAttribute("style");
            this.index++;
            let toast = this.toastCtrl.create({
                message: 'Added a course',
                duration: 2000,
                position: 'bottom'
            });

            toast.present();
        }
    }
}
