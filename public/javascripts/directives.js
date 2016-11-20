angular.module('radiator')
.directive('pipelineGroups', function() {
  return {
    templateUrl: '/templates/pipelineGroups.html',
    restrict: 'E',
    scope: {
      pipelineGroups: '=groups'
    }
  };
})
.directive('pipelineGroup', function() {
  return {
    templateUrl: '/templates/pipelineGroup.html',
    restrict: 'E',
    scope: {
      pipelineGroup: '=group'
    }
  };
})
.directive('pipeline', function() {
  return {
    templateUrl: '/templates/pipeline.html',
    restrict: 'E',
    scope: {
      pipeline: '=pipeline'
    }
  };
})
.directive('pauseInfo', function() {
  return {
    templateUrl: '/templates/pauseInfo.html',
    restrict: 'E',
    scope: {
      pauseInfo: '=pauseInfo'
    }
  };
})
.directive('instances', function() {
  return {
    templateUrl: '/templates/instances.html',
    restrict: 'E',
    scope: {
      instances: '=instances',
      pauseInfo: '=pauseInfo'
    }
  };
})
.directive('instance', function() {
  return {
    templateUrl: '/templates/instance.html',
    restrict: 'E',
    scope: {
      instance: '=instance',
      pauseInfo: '=pauseInfo'
    }
  };
})
.directive('stages', function() {
  return {
    templateUrl: '/templates/stages.html',
    restrict: 'E',
    scope: {
      stages: '=stages',
      stageWidth: '=stageWidth'
    }
  };
})
.directive('stage', function() {
  var statusToCssClass = {
    'Building': 'building',
    'Passed': 'success',
    'Failed': 'failed',
    'Unknown': 'unknown'
  };
  function link(scope) {
    scope.statusToCssClass = statusToCssClass;
  }
  return {
    templateUrl: '/templates/stage.html',
    restrict: 'E',
    link: link,
    scope: {
      stage: '=stage',
      stageWidth: '=stageWidth'
    }
  };
});
