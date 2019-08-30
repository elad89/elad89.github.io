$(function () {

    $('#results').css('visibility', 'visible');
    $('#inputted').append("All");

    var typeahead = {
        typeaheadInit: function() {
        var jsonData = [{
            'id': 1,
            'name': 'Allied Health Professionals',
            'role' : 'role-1'
        }, {
            'id': 2,
            'name': 'Apprentice (Health and Records Patient Admin)',
            'role' : 'role-0'
        }, {
            'id': 3,
            'name': 'Apprentice (ICT)',
            'role' : 'role-1'
        }, {
            'id': 4,
            'name': 'Apprentice (Information Management)',
            'role' : 'role-1'
        }, {
            'id': 5,
            'name': 'Assistant Clinical Audit Facilitator',
            'role' : 'role-0'
        }, {
            'id': 6,
            'name': "Assistant Information Analyst",
            'role': "role-4"
        }, {
            'id': 7,
            'name': "Assistant Librarian",
            'role': "role-0"
        }, {
            'id': 8,
            'name': "Assistant Service Desk Operator",
            'role': "role-2"
        }, {
            'id': 9,
            'name': "Assistant Trainer",
            'role': "role-2"
        }, {
            'id': 10,
            'name': "Benefits Lead",
            'role': "role-2"
        },{
            'id': 11,
            'name': "Benefits Manager",
            'role': "role-2"
        }, {
            'id': 12,
            'name': "Business Analyst",
            'role': "role-3"
        }, {
            'id': 13,
            'name': "Business Change Facilitator",
            'role': "role-2"
        }, {
            'id': 14,
            'name': "Care Pathway Co-ordinator",
            'role': "role-0"
        }, {
            'id': 15,
            'name': "Chief Clinical Info. Officer",
            'synonyms': "CCIO",
            'role': "role-4"
        }, {
            'id': 16,
            'name': "Clincal Coding Support Worker",
            'role': "role-0"
        }, {
            'id': 17,
            'name': "Clinic Co-ordinator",
            'role': "role-1"
        }, {
            'id': 18,
            'name': "Clinical Assurance Administrator",
            'role': "role-0"
        }, {
            'id': 19,
            'name': "Clinical Audit Facilitator",
            'role': "role-1"
        }, {
            'id': 20,
            'name': "Clinical Coder",
            'role': "role-2"
        }, {
            'id': 21,
            'name': "Clinical Coding Manager",
            'role': "role-2"
        }, {
            'id': 22,
            'name': "Clinical Director Lead",
            'role': "role-3"
        }, {
            'id': 23,
            'name': "Clinical Engagement Lead",
            'role': "role-3"
        }, {
            'id': 24,
            'name': "Clinical Informaticist",
            'role': "role-4"
        }, {
            'id': 25,
            'name': "Clinical Librarian",
            'role': "role-2"
        }, {
            'id': 26,
            'name': "Clinical Quality Manager",
            'role': "role-2"
        }, {
            'id': 27,
            'name': "Clinical Researcher",
            'role': "role-3"
        }, {
            'id': 28,
            'name': "Clinical Risk Manager",
            'role': "role-1"
        }, {
            'id': 29,
            'name': "Clinical Trials Officer",
            'role': "role-3"
        }, {
            'id': 30,
            'name': "Consultant",
            'synonyms': "surgeon",
            'role': "role-1"
        }, {
            'id': 31,
            'name': "Data Quality Manager",
            'role': "role-3"
        }, {
            'id': 32,
            'name': "Director of ICT",
            'role': "role-3"
        }, {
            'id': 33,
            'name': "Director of Informatics",
            'role': "role-3"
        }, {
            'id': 34,
            'name': "General Practioner",
            'synonyms': "GP",
            'role': "role-1"
        }, {
            'id': 35,
            'name': "Health Care Assistant",
            'synonyms': "HCA",
            'role': "role-0"
        }, {
            'id': 36,
            'name': "Head of Clinical Coding Services",
            'role': "role-2"
        }, {
            'id': 37,
            'name': "Head of Health Records",
            'role': "role-2"
        }, {
            'id': 38,
            'name': "Head of Information",
            'synonyms': "HOI",
            'role': "role-3"
        }, {
            'id': 39,
            'name': "Head of IT",
            'role': "role-3"
        }, {
            'id': 40,
            'name': "Head of Systems Development",
            'role': "role-4"
        }, {
            'id': 41,
            'name': "Health Records Assistant",
            'role': "role-0"
        }, {
            'id': 42,
            'name': "Health Records Clerk",
            'role': "role-0"
        }, {
            'id': 43,
            'name': "Health Records Manager",
            'role': "role-1"
        }, {
            'id': 44,
            'name': "Health Records Officer",
            'role': "role-0"
        }, {
            'id': 45,
            'name': "Health Records Team Leader",
            'role': "role-0"
        }, {
            'id': 46,
            'name': "Healthcare Scientists",
            'role': "role-1"
        }, {
            'id': 47,
            'name': "House Officer",
            'role': "role-1"
        }, {
            'id': 48,
            'name': "ICT Service Manager",
            'role': "role-3"
        }, {
            'id': 49,
            'name': "ICT Test Analyst",
            'role': "role-2"
        }, {
            'id': 50,
            'name': "Information Analyst",
            'role': "role-4"
        }, {
            'id': 51,
            'name': "Information Assistant",
            'role': "role-1"
        }, {
            'id': 52,
            'name': "Information Development Manager",
            'role': "role-3"
        }, {
            'id': 53,
            'name': "Information Governance Assistant",
            'synonyms': "IG Assistant",
            'role': "role-0"
        }, {
            'id': 54,
            'name': "Information Governance Manager",
            'synonyms': "IG Manager",
            'role': "role-0"
        }, {
            'id': 55,
            'name': "Information Governance Officer",
            'synonyms': "IG Officer",
            'role': "role-0"
        }, {
            'id': 56,
            'name': "Information Security Manager",
            'role': "role-2"
        }, {
            'id': 57,
            'name': "IT Team Administrator",
            'role': "role-2"
        }, {
            'id': 58,
            'name': "IT Telecoms Support Officer",
            'role': "role-2"
        }, {
            'id': 59,
            'name': "Junior Doctor",
            'name': "Jnr Doctor, Foundation Year 1, FY1, Foundation Year 2, FY2, SAS Doctor, Specialty and Associate Specialist",
            'role': "role-1"
        }, {
            'id': 60,
            'name': "Librarian",
            'role': "role-0"
        }, {
            'id': 61,
            'name': "Library Assistant",
            'role': "role-0"
        }, {
            'id': 62,
            'name': "Library Services Manager",
            'role': "role-1"
        }, {
            'id': 63,
            'name': "Medical Secretary",
            'role': "role-1"
        }, {
            'id': 64,
            'name': "Medical Summariser",
            'role': "role-0"
        }, {
            'id': 65,
            'name': "Nursing Assistant",
            'synonyms': "NA",
            'role': "role-0"
        }, {
            'id': 66,
            'name': "Network Manager",
            'role': "role-2"
        }, {
            'id': 67,
            'name': "Staff Nurse",
            'synonyms': "Community Nurse",
            'role': "role-1"
        }, {
            'id': 68,
            'name': "Patient Admin Officer",
            'role': "role-0"
        }, {
            'id': 69,
            'name': "Patient Safety Assistant",
            'role': "role-0"
        }, {
            'id': 70,
            'name': "Patient Safety Facilitator",
            'role': "role-1"
        }, {
            'id': 71,
            'name': "Programme Director",
            'role': "role-2"
        }, {
            'id': 72,
            'name': "Programme Lead",
            'role': "role-2"
        }, {
            'id': 73,
            'name': "Programme Manager",
            'role': "role-2"
        }, {
            'id': 74,
            'name': "Programme/Project Support Officer",
            'role': "role-0"
        }, {
            'id': 75,
            'name': "Project Administrator",
            'role': "role-0"
        }, {
            'id': 76,
            'name': "Project Lead",
            'role': "role-2"
        }, {
            'id': 77,
            'name': "Project Manager",
            'role': "role-2"
        }, {
            'id': 78,
            'name': "Registrar",
            'synonyms': "SpR, Specialist Registrar",
            'role': "role-1"
        }, {
            'id': 79,
            'name': "Research & Evaluation Manager",
            'role': "role-3"
        }, {
            'id': 80,
            'name': "Senior Clinical Audit Facilitator",
            'role': "role-3"
        }, {
            'id': 81,
            'name': "Senior ICT Support Technician",
            'role': "role-2"
        }, {
            'id': 82,
            'name': "Senior Information Analyst",
            'role': "role-4"
        }, {
            'id': 83,
            'name': "Senior Programme/Project Support Officer",
            'role': "role-0"
        }, {
            'id': 84,
            'name': "Senior Systems Developer",
            'role': "role-4"
        }, {
            'id': 85,
            'name': "Senior Trainer",
            'role': "role-2"
        }, {
            'id': 86,
            'name': "Server Support Technician",
            'role': "role-2"
        }, {
            'id': 87,
            'name': "Service Desk Manager",
            'role': "role-2"
        }, {
            'id': 88,
            'name': "Service Desk Operator",
            'role': "role-2"
        }, {
            'id': 89,
            'name': "System Development Manager",
            'role': "role-4"
        }, {
            'id': 90,
            'name': "Systems Developer",
            'role': "role-4"
        }, {
            'id': 91,
            'name': "Technical Architect",
            'role': "role-4"
        }, {
            'id': 92,
            'name': "Trainer",
            'role': "role-2"
        }, {
            'id': 93,
            'name': "Training Administrator",
            'role': "role-2"
        }, {
            'id': 94,
            'name': "Waiting List Co-ordinator",
            'role': "role-0"
        }, {
            'id': 95,
            'name': "Ward Clerk",
            'role': "role-1"
        }, {
            'id': 96,
            'name': "Senior Staff Nurse",
            'synonyms': "Deputy Ward Manager",
            'role': "role-1"
        }, {
            'id': 97,
            'name': "Ward Manager",
            'synonyms': "Ward Sister",
            'role': "role-1"
        }, {
            'id': 98,
            'name': "Nursery Nurse Assistant",
            'synonyms': "Nursery Assistant",
            'role': "role-0"
        }
    ];
      
        var productNames = [];
            $.each(jsonData, function(index, product) {
                productNames.push(product.name + "#" + product.image + "#" + product.id + '#' + product.role + product.synonyms);
                console.log(index+1);

                console.log(product.role);
            });
          
            $('#typeahead2').typeahead({
                source: productNames,
                highlighter: function(item) {
                    var parts = item.split('#'),

                    html = '<div';
                    html = '<div data-filter=' + parts[2] + 'class="typeahead-inner" class="' + parts[2] + 'id="' + parts[2] + '">"';
                    html = '<div class="item-body">';
                    html = '<p class="item-heading" id="' + parts[3] + '">' + parts[0] + '</p></div></div></div>';
      
                    var query = this.query;
                    var reEscQuery = query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                    var reQuery = new RegExp('(' + reEscQuery + ')', "gi");
                    var jElem = $(html);
                    var textNodes = $(jElem.find('*')).add(jElem).contents().filter(function() {
                        return this.nodeType === 3;
                    });
              
                    textNodes.replaceWith(function() {
                        return $(this).text().replace(reQuery, '<strong>$1</strong>');
                    });
      
                    return jElem.html();
                },
            
                updater: function(selectedName) {
                    var role = selectedName.split('#')[3];
                    var html = '<span id="roleSpan" class="' + role + '">' + role + '</span>';
                    var name = selectedName.split('#')[0];
                    $(".filter").html(html);                   
                    $("#inputted").empty()
                    $("#inputted").text(name)
                    $('#roleTitleSelected').text(name);
                    $(this).FilterFunction();
                    $('#inputted').css('visibility', 'visible');
                    return name;
                }

            });

        },
      
        initialize: function() {
            var _this = this;
            _this.typeaheadInit();
        }
    };
    $(document).ready(function() {
  
        typeahead.initialize();

    });

    $.fn.nameFunction = function() { 
        $('html, body').animate({
            scrollTop: $('.grid').offset().top
          }, 800, function(){
          });
    }

    $.fn.FilterFunction = function() { 

        var checkClass = function(){
            if ($('#content li').hasClass('hide2')){
                $('#content li').removeClass('hide2');
            }
        };

        $('#all').click( function() {    
            checkClass();
            $('#all').css('visibility', 'visible');
            $('#inputted').text('All');
            $('#typeahead2').val("");
            $(this).counterallfunction();
            $('#roleTitleSelected').text("All");
        });
        
        $('#roleSpan:contains("role-0")').each(function () {
            console.log("role-0");
            checkClass();
            $('#content li:not(.role-0)').toggleClass('hide2');
            $(this).counter0function();
        });

        $('#roleSpan:contains("role-1")').each(function () {
            console.log("role-1");
            checkClass();
            $('#content li:not(.role-1)').toggleClass('hide2');
            $(this).counter1function();
        });

        $('#roleSpan:contains("role-2")').each(function () {
            console.log("role-2");
            checkClass();
            $('#content li:not(.role-2)').toggleClass('hide2');
            $(this).counter2function();
        });

        $('#roleSpan:contains("role-3")').each(function () {
            console.log("role-3");
            checkClass();
            $('#content li:not(.role-3)').toggleClass('hide2');
            $(this).counter3function();
        });

        $('#roleSpan:contains("role-4")').each(function () {
            console.log("role-4");
            checkClass();
            $('#content li:not(.role-4)').toggleClass('hide2');
            $(this).counter4function();
        });
    };

    $.ajax({
        beforeSend: function(request) {
            request.setRequestHeader("secret-key", '$2a$10$9JA4NFd8Y7mNml1NfahZD.oAomCMCixRnlRcdoRLE1fKWs.DRSw/e');
        },
        
        dataType: "json",
        url: "https://api.jsonbin.io/b/5d19d30953e7950e4f9652e3",
        success: function(data, i) {
            let list = $('#hexGrid');
            
            $.each(data.contains, function(i,value) {
                list.append($('<li class="hex ' + value.roles + '" data-category="' + value.roles + '"><div class="hexIn"><a class="hexLink" href="' + value.link + '"><div class="img" </div><h1 id="demo1">' + value.title + '</h1></div><p id="demo2">' + value.category + ' | ' +  value.topic + '<br /><br />' + value.description + '<br /><br />' + value.duration + '</p></li></a>'))
                console.log(i+1);
            });

            var counter0 = $('.role-0').length;
            var counter1 = $('.role-1').length;
            var counter2 = $('.role-2').length;
            var counter3 = $('.role-3').length;
            var counter4 = $('.role-4').length;
            var counterall = counter0 + counter1 + counter2 + counter3 + counter4;

            console.log(counterall);
            console.log(counter0);
            console.log(counter1);
            console.log(counter2);
            console.log(counter3);
            console.log(counter4);
            
           $('.count').text(counterall);

           $.fn.counterallfunction = function() { 
            $('.count').text(counterall);
           }

           $.fn.counter0function = function() { 
            $('.count').text(counter0);
           }

           $.fn.counter1function = function() { 
            $('.count').text(counter1);
           }

           $.fn.counter2function = function() { 
            $('.count').text(counter2);
           }

           $.fn.counter3function = function() { 
            $('.count').text(counter3);
           }

           $.fn.counter4function = function() { 
            $('.count').text(counter4);
           }

        }
    });

});


