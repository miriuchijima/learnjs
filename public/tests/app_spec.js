describe('LearnJS',function(){
    it('can show a problem view',fuction(){
       learnjs.showView('#problem-1');
       expect($('.view-controller .problem-view').length).toEqual(1);
       });    
});