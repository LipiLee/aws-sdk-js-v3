import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { CreateRoleAliasRequest, CreateRoleAliasResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateRoleAliasCommand,
  serializeAws_restJson1CreateRoleAliasCommand,
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

export interface CreateRoleAliasCommandInput extends CreateRoleAliasRequest {}
export interface CreateRoleAliasCommandOutput extends CreateRoleAliasResponse, __MetadataBearer {}

/**
 * <p>Creates a role alias.</p>
 */
export class CreateRoleAliasCommand extends $Command<
  CreateRoleAliasCommandInput,
  CreateRoleAliasCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRoleAliasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRoleAliasCommandInput, CreateRoleAliasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateRoleAliasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRoleAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRoleAliasResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRoleAliasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateRoleAliasCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRoleAliasCommandOutput> {
    return deserializeAws_restJson1CreateRoleAliasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
