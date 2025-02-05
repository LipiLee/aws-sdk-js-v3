import { AppConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppConfigClient";
import { DeploymentStrategy, UpdateDeploymentStrategyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateDeploymentStrategyCommand,
  serializeAws_restJson1UpdateDeploymentStrategyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface UpdateDeploymentStrategyCommandInput extends UpdateDeploymentStrategyRequest {}
export interface UpdateDeploymentStrategyCommandOutput extends DeploymentStrategy, __MetadataBearer {}

/**
 * <p>Updates a deployment strategy.</p>
 */
export class UpdateDeploymentStrategyCommand extends $Command<
  UpdateDeploymentStrategyCommandInput,
  UpdateDeploymentStrategyCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateDeploymentStrategyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDeploymentStrategyCommandInput, UpdateDeploymentStrategyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppConfigClient";
    const commandName = "UpdateDeploymentStrategyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDeploymentStrategyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeploymentStrategy.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDeploymentStrategyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateDeploymentStrategyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeploymentStrategyCommandOutput> {
    return deserializeAws_restJson1UpdateDeploymentStrategyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
